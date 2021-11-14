package com.testIn.runners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        glue = "com/testIn/stepdefs",
        features = "@target/rerun.txt",
        plugin = {"html:target/failed-html-report"}
)
public class FailedTestRunner {
}
