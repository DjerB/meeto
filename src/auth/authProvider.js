import React, { useState, useMemo } from 'react';
import AppID from 'ibmcloud-appid-js';

import AuthContext from './authContext';

import * as CONFIG from '../config';

import appid from 'ibmcloud-appid';

const SelfServiceManager = appid.SelfServiceManager;
let selfServiceManager = new SelfServiceManager({
	iamApiKey: "{iam-api-key}",
	managementUrl: "{management-url}"
});

const AuthProvider = ({ children }) => {
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const appID = useMemo(() => {
        return new AppID()
    }, []);

    (async () => {
        try {
            await appID.init({
                clientId: CONFIG.APP_ID_CLIENT_ID,
                discoveryEndpoint: CONFIG.APP_ID_DISCOVERY_ENDPOINT
            });
        } catch (e) {
            setError(e.message);
        }
    })();

    const login = async () => {
        try {
            const tokens = await appID.signin();
            console.log(tokens)
            setUser(tokens.idTokenPayload.name);
        } catch (e) {
            setError(e.message);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;