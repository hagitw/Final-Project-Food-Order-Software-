interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '{T2KdGj0jaXIk6ag754qdiDiQqeCMluGD}',
  domain: '{finalpro.auth0.com}',
  callbackURL: 'http://localhost:4200/callback'
};