package com.automation.ApiScreens;

import static org.testng.Assert.assertEquals;

import java.io.IOException;

import org.apache.http.HttpEntity;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.testng.Assert;

public class YourMDApi {

	public void postMDChatRequest(int code, String expectedHint, String expectedValue)
			throws ClientProtocolException, IOException {
		System.out.println("I am here....");
		String postUrl = "https://api.your.md/v3/chat-external";
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(postUrl);

		String json = "{\"message\":\"Hi\",\"user_name\":\"ram262021\",\"user_id\":\"ram302020\"}";
		StringEntity entity = new StringEntity(json);
		httpPost.setEntity(entity);

		httpPost.setHeader("Content-type", "application/json;charset=UTF-8");
		httpPost.setHeader("x-api-key", "479LqMuOB8XVXG5KMdKF67oVERYke1ca2aet2XL5");
		httpPost.setHeader("Host", "api.your.md");
		httpPost.setHeader("platform-id", "api");
		// httpPost.setHeader("Content-Length", "62");

		CloseableHttpResponse response = client.execute(httpPost);
		System.out.println(response.getStatusLine().getStatusCode());
		System.out.println(response);
		Assert.assertEquals(code, response.getStatusLine().getStatusCode());

		HttpEntity entityToString = response.getEntity();
		String content = EntityUtils.toString(entityToString);
		System.out.println(content);
		JSONObject jsonObj = new JSONObject(content);

		String actualHintMessage = jsonObj.getString("hint");
		String actualValueMessage = jsonObj.getJSONArray("messages").getJSONObject(0).getString("value");

		assertEquals(actualHintMessage, expectedHint);
		assertEquals(actualValueMessage, expectedValue);
		

	}
	
	public void postMDChatWithInvalidHeadersRequest(int code)
			throws ClientProtocolException, IOException {
		System.out.println("I am here....");
		String postUrl = "https://api.your.md/v3/chat-external";
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(postUrl);

		String json = "{\"message\":\"Hi\",\"user_name\":\"ram262021\",\"user_id\":\"ram302020\"}";
		StringEntity entity = new StringEntity(json);
		httpPost.setEntity(entity);

		httpPost.setHeader("Content-type", "application/json;charset=UTF-8");
		httpPost.setHeader("Host", "api.your.md");
		httpPost.setHeader("platform-id", "api");

		CloseableHttpResponse response = client.execute(httpPost);
		System.out.println(response.getStatusLine().getStatusCode());
		System.out.println(response);
		Assert.assertEquals(code, response.getStatusLine().getStatusCode());
		
	}
	

	public void postMDChatWithInvalidBodyRequest(int code)
			throws ClientProtocolException, IOException {
		System.out.println("I am here....");
		String postUrl = "https://api.your.md/v3/chat-external";
		CloseableHttpClient client = HttpClients.createDefault();
		HttpPost httpPost = new HttpPost(postUrl);

		String json = "{\"message\":\"Hi\",\"user_name\":\"ram\",\"user_id\":\"ram\"}";
		StringEntity entity = new StringEntity(json);
		httpPost.setEntity(entity);

		httpPost.setHeader("Content-type", "application/json;charset=UTF-8");
		httpPost.setHeader("Host", "api.your.md");
		httpPost.setHeader("platform-id", "api");

		CloseableHttpResponse response = client.execute(httpPost);
		System.out.println(response.getStatusLine().getStatusCode());
		System.out.println(response);
		Assert.assertEquals(code, response.getStatusLine().getStatusCode());
		
	}
}
