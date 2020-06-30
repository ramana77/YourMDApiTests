package com.automation.ApiSteps;

import java.io.IOException;
import java.util.List;

import org.apache.http.client.ClientProtocolException;

import com.automation.ApiScreens.YourMDApi;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;

public class YourMDApiSteps {
	YourMDApi api = new YourMDApi();

	@Given("^user sends a post request  with valid inputs and checks the \"([^\"]*)\" and validates$")
	public void userSendsAPostRequestForTheChatApi(int code, DataTable table) throws ClientProtocolException, IOException {
		List<List<String>> data = table.raw();
		String _Hint = data.get(1).get(0);
		String _Value = data.get(1).get(1);
		api.postMDChatRequest(code, _Hint, _Value);
	}

	@Given("^user sends a post request with invalid headers and checks the \"([^\"]*)\"$")
	public void userSendsPostRequestWithInvalidHeaders(int code) throws ClientProtocolException, IOException {
		api.postMDChatWithInvalidHeadersRequest(code);
	}
	
	@Given("^user sends a post request with invalid body and checks the \"([^\"]*)\"$")
	public void userSendsPostRequestWithInvalidBody(int code) throws ClientProtocolException, IOException {
		api.postMDChatWithInvalidBodyRequest(code);
	}
}
