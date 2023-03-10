package com.gatling.tests

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class SearchAndEditComputer extends Simulation {

  val httpProtocol = http
    .baseUrl("https://computer-database.gatling.io")
    .inferHtmlResources(BlackList(""".*\.js""", """.*\.css""", """.*\.gif""", """.*\.jpeg""", """.*\.jpg""", """.*\.ico""", """.*\.woff""", """.*\.woff2""", """.*\.(t|o)tf""", """.*\.png""", """.*detectportal\.firefox\.com.*"""), WhiteList())
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("es,es-ES;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6")
    .upgradeInsecureRequestsHeader("1")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36 Edg/109.0.1518.55")

  val search = exec(http("Home")
    .get("/computers"))
    .pause(2)
    .exec(http("Search")
      .get("/computers?f=Ace"))
    .pause(3)
    .exec(http("Select")
      .get("/computers/381"))
    .pause(4)

  val edit = exec(http("Edit")
    .post("/computers/381")
    .formParam("name", "ACE")
    .formParam("introduced", "2010-12-10")
    .formParam("discontinued", "2020-10-12")
    .formParam("company", "2"))
    .pause(4)

  val scn = scenario("SearchAndEditComputer").exec(search, edit)

  val users = scenario("Users").exec(search)
  val admins = scenario("Admins").exec(search, edit)

  setUp(
    users.inject(rampUsers(10).during(10)),
    admins.inject(rampUsers(4).during(10))
  ).protocols(httpProtocol)
}