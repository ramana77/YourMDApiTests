package testRunner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(
		strict = false,
		features = "TestCases",
		tags={" @PostYourMD"},
		format = { "pretty",
									"json:target/cucumber.json",
			    					"html:target/cucumber-html-report",
					     	    	"com.cucumber.listener.ExtentCucumberFormatter:target/report.html",
		},
		glue = { "com.automation.ApiSteps" })
public class Api  extends AbstractTestNGCucumberTests{

}


