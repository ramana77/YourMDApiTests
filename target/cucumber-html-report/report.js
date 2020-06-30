$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PostYourMDChat.feature");
formatter.feature({
  "line": 2,
  "name": "YourMD Chat Tests",
  "description": "",
  "id": "yourmd-chat-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@PostYourMD"
    },
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Post yourMD chat and validate response code",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-and-validate-response-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user sends a post request  with valid inputs and checks the \"\u003cResponseCode\u003e\" and validates",
  "rows": [
    {
      "cells": [
        "Hint",
        "Value"
      ],
      "line": 6
    },
    {
      "cells": [
        "Type a message …",
        "I\u0027m sorry, that selection isn\u0027t valid."
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-and-validate-response-code;",
  "rows": [
    {
      "cells": [
        "ResponseCode"
      ],
      "line": 10,
      "id": "yourmd-chat-tests;post-yourmd-chat-and-validate-response-code;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 11,
      "id": "yourmd-chat-tests;post-yourmd-chat-and-validate-response-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Post yourMD chat and validate response code",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-and-validate-response-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PostYourMD"
    },
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user sends a post request  with valid inputs and checks the \"200\" and validates",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Hint",
        "Value"
      ],
      "line": 6
    },
    {
      "cells": [
        "Type a message …",
        "I\u0027m sorry, that selection isn\u0027t valid."
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 61
    }
  ],
  "location": "YourMDApiSteps.userSendsAPostRequestForTheChatApi(int,DataTable)"
});
formatter.result({
  "duration": 1267535393,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Post yourMD chat with invalid headers and  validate response code",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-headers-and--validate-response-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user sends a post request with invalid headers and checks the \"\u003cResponseCode\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-headers-and--validate-response-code;",
  "rows": [
    {
      "cells": [
        "ResponseCode"
      ],
      "line": 17,
      "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-headers-and--validate-response-code;;1"
    },
    {
      "cells": [
        "403"
      ],
      "line": 18,
      "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-headers-and--validate-response-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Post yourMD chat with invalid headers and  validate response code",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-headers-and--validate-response-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PostYourMD"
    },
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "user sends a post request with invalid headers and checks the \"403\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 63
    }
  ],
  "location": "YourMDApiSteps.userSendsPostRequestWithInvalidHeaders(int)"
});
formatter.result({
  "duration": 549893939,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Post yourMD chat with invalid body and  validate response code",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-body-and--validate-response-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "user sends a post request with invalid body and checks the \"\u003cResponseCode\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-body-and--validate-response-code;",
  "rows": [
    {
      "cells": [
        "ResponseCode"
      ],
      "line": 24,
      "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-body-and--validate-response-code;;1"
    },
    {
      "cells": [
        "403"
      ],
      "line": 25,
      "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-body-and--validate-response-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Post yourMD chat with invalid body and  validate response code",
  "description": "",
  "id": "yourmd-chat-tests;post-yourmd-chat-with-invalid-body-and--validate-response-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@PostYourMD"
    },
    {
      "line": 1,
      "name": "@API"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user sends a post request with invalid body and checks the \"403\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "403",
      "offset": 60
    }
  ],
  "location": "YourMDApiSteps.userSendsPostRequestWithInvalidBody(int)"
});
formatter.result({
  "duration": 265204068,
  "status": "passed"
});
});