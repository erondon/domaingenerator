/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var p = "";
  var a = "";
  var n = "";
  var domain = "";

  for (p in pronoun) {
    for (a in adj) {
      for (n in noun) {
        domain += "<li>" + pronoun[p] + adj[a] + noun[n] + ".com</li>";
      }
    }
  }
  document.getElementById("lista").innerHTML = domain;
};
