const dev = {
  STRIPE_KEY: "pk_test_0ZFwRZ9Bo1E7IatKD8gNs1hZ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-3"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://r0qffd1iil.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_ssaSWIwMX",
    APP_CLIENT_ID: "i53fq5t23f5ccmilg67tbs9it",
    IDENTITY_POOL_ID: "us-east-2:dd4d6306-a1c5-4a72-bda7-5d6f70aa8df5"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_0ZFwRZ9Bo1E7IatKD8gNs1hZ",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-upload-3"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://9yxfjxgdah.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_8BNuXbbhQ",
    APP_CLIENT_ID: "6mf50koskntt0ktl2obcmnq8ci",
    IDENTITY_POOL_ID: "us-east-2:77f0744d-23b3-4ef5-a5cc-06c5778f3dce"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
