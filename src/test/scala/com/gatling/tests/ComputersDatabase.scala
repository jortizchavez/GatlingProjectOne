package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class ComputersDatabase extends Simulation {

	val httpProtocol = http
		.baseUrl("https://computer-database.gatling.io")
		.inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
		.acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6")
		.upgradeInsecureRequestsHeader("1")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.52")

	val scn = scenario("ComputersDatabase")
		.exec(http("ComputersDatabase")
			.get("/computers"))
		.pause(4)
		.exec(http("CreateDatabasePage")
			.get("/computers/new"))
		.pause(28)
		.exec(http("CreateNewComputer")
			.post("/computers")
			.formParam("name", "MyComputer")
			.formParam("introduced", "2010-01-01")
			.formParam("discontinued", "2020-01-01")
			.formParam("company", "2"))
		.pause(11)
		.exec(http("FilterCOmputer")
			.get("/computers?f=MyComputer"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}