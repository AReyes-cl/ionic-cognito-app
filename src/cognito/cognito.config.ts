export interface ICognitoConfig {
    region: string;
    userPoolId: string;
    appId: string;
    idpUrl?: string;
    identityPoolId?: string;
}

export let CognitoConfig: ICognitoConfig = {
    region:'us-east-1',
    userPoolId: 'us-east-1_1gfVMWz3C',
    appId: 'l3fockh04jctqv9svuqtt2ug0',
    idpUrl: `cognito-idp.us-east-1.amazonaws.com`,
    identityPoolId: 'us-east-1:7b7898c5-6b92-426b-8df0-31fc935fb627'
}