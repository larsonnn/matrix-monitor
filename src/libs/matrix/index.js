import {  matrixStore} from "../../store";

let client = undefined

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