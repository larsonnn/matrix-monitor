import { PollEvent } from "matrix-js-sdk";
import { eventStore, matrixStore} from "../../store";

let client = undefined

const ROOM_EVENTS = [
    "Room.myMembership",
    "Room.tags",
    "Room.accountData",
    "Room.receipt",
    "Room.name",
    "Room.redaction",
    "Room.redactionCancelled",
    "Room.localEchoUpdated",
    "Room.timeline",
    "Room.timelineReset",
    "Room.TimelineRefresh",
    "Room.OldStateUpdated",
    "Room.CurrentStateUpdated",
    "Room.historyImportedWithinTimeline",
    "Room.UnreadNotifications",
]

const USER_EVENTS = [
    "User.displayName",
    "User.avatarUrl",
    "User.presence",
    "User.currentlyActive",
    "User.lastPresenceTs",
]

const POLL_EVENTS = [
    "Poll.new",
    "Poll.end",
    "Poll.update",
    "Poll.Responses",
    "Poll.Destroy",
    "Poll.UndecryptableRelations",
]

const eventLog = (name, type, ...event) => {
    const evt = {
        name,
        type,
        parameters: event[0][0],
        checkInTs: Date.now()
    };
    eventStore.events.push(evt);
}

const loginWithToken = async (authData) => {
    {
        client = matrixcs.createClient({
                accessToken: authData.access_token,
                userId: authData.user_id,
                baseUrl: "https://" + authData.home_server,
                timelineSupport: true,
                useAuthorizationHeader: true,
                verificationMethods: [
                    "m.sas.v1"
                ],
        });
        ROOM_EVENTS.forEach((name) => {
            client.on(name, (...args) => eventLog(name, "room", args));
        });
        USER_EVENTS.forEach((name) => {
            client.on(name, (...args) => eventLog(name, "user", args));
        });
        POLL_EVENTS.forEach((name) => {
            client.on(name, (...args) => eventLog(name, "poll", args));
        });
        await client.startClient({ initialSyncLimit: 12 });

        const userId = client.getUserId();
        if (userId === null) throw new Error('UserID is null.');
        return client.isLoggedIn();
    }
};

const logout = async () => {
    await client?.logout();
    localStorage.clear();
    matrixStore.isLoggedIn = false;
    matrixStore.auth = {}
}


export default {
    client,
    loginWithToken,
    logout
}