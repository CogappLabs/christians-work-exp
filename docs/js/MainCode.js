const fish = [
  {
    id: 1,
    name: "European Anchovy fished using purse seines",
    Category: "Certified",
    Info: "Purse seines encircle fish with a large wall of netting that is supported in the water by a floating headrope and weighted footrope. Evenly spaced rings are attached to the lower edge of the net, and a purse line made of steel or rope runs through the rings. When in use, the net is closed like a drawstring purse to capture fish. Purse seines are used to catch squid, pollock, salmon, anchovies, and many other species.",
    RelevantImage: "images/european-anchovy.png",
  },
  {
    id: 2,
    name: "Almaco Jack farmed using indoor recirculating tanks",
    Category: "Best Choice",
    Info: "Almaco jack farmed worldwide in indoor recirculating tanks with wastewater treatment is rated green. The Seafood Watch analysis concludes that producers using dry pellet feed will, on average, likely have a yellow rating for feed. Indoor recirculating systems tend to have low chemical use. However, most producers can release up to 10 percent of daily water flow without treatment, and that water may contain chemicals or their byproducts. Similarly, it is unlikely the water that is discharged daily has been disinfected against disease. However, there is a low risk of disease transmission to wild species when fish are farmed in indoor recirculating tanks because it is not common for disease outbreaks to occur.",
    RelevantImage: "images/almaco-jack.webp",
  },
  {
    id: 3,
    name: "Bluefish caught with set gillnets",
    Category: "Avoid",
    Info: "Bluefish caught in the U.S. Atlantic with set gillnets is rated red. This fishery poses a risk to overfished or at-risk species, including endangered North Atlantic right whales. Entanglement in fishing gear is the leading cause of serious injury and death to North Atlantic right whales. As a result, bycatch management is ineffective for all pot and set gillnet fisheries operating within the North Atlantic right whale’s range because current management measures do not go far enough to mitigate entanglement risks and promote recovery of the species. The bluefish stock is depleted, but overfishing is not occurring. Set gillnets have minimal habitat impacts, and measures to protect bluefish’s important role in the ecosystem are being developed.",
    RelevantImage: "images/bluefish2.png",
  },
  {
    id: 4,
    name: "Bowfin caught with set gillnets",
    Category: "Good Alternative",
    Info: "Bowfin caught in Louisiana with set gillnets is rated yellow. Current fishing levels are unknown, and bowfin has characteristics that make this species less vulnerable to overfishing. Bycatch information is very limited, and this fishery catches and retains three species of buffalofish with unknown stock statuses. Management is moderately effective overall and includes catch restrictions and seasonal and area closures. Bowfin are caught in resilient, shallow-water habitats, but little is known about how their removal may impact the food web. Consumer tip: Bowfin roe is the primary commercial product.",
    RelevantImage: "images/bowfin.webp",
  },
  {
    id: 5,
    name: "Gilthead bream farmed with a marine net pen",
    Category: "Avoid",
    Info: "Gilthead bream farmed in Turkey in marine net pens is rated red. Turkey has a somewhat effective framework for regulating chemical use. However, while there is uncertainty about how frequently antibiotics that are important to human health are used, the available data indicate that antibiotic use can be significant. Also, multiple large-scale escapes of farmed fish have and continue to occur, though some areas have enacted best practice measures to limit these events. All other environmental impacts (or the risk of impacts) are rated low to moderate concerns.",
    RelevantImage: "images/giltheaded.webp",
  },
  {
    id: 6,
    name: "Cabezon fished with Handlines and hand-operated pole-and-lines",
    Category: "Good Alternative",
    Info: "Cabezon caught on the U.S. West Coast with handlines and hand-operated pole-and-lines is rated yellow. The stock is likely healthy, and overfishing is not occurring. This fishery catches China rockfish from a stock that is likely experiencing overfishing. Habitat impacts are minimal, and policies are being developed to protect the ecosystem.",
    RelevantImage: "images/cabezon.webp",
  },
  {
    id: 7,
    name: "Capelin fished with purse seines",
    Category: "Certified",
    Info: "Purse seines encircle fish with a large wall of netting that is supported in the water by a floating headrope and weighted footrope. Evenly spaced rings are attached to the lower edge of the net, and a purse line made of steel or rope runs through the rings. When in use, the net is closed like a drawstring purse to capture fish. Purse seines are used to catch squid, pollock, salmon, anchovies, and many other species.",
    RelevantImage: "images/capelin.webp",
  },
  {
    id: 8,
    name: "Capelin fished in Canada with stationary uncovered pound nets",
    Category: "Avoid",
    Info: "Capelin caught in Canada is rated red. Capelin is depleted in the North Atlantic, and data on the population abundance and fishing levels in the Gulf of St. Lawrence are lacking. In addition, bycatch impacts are a serious concern in five of the seven fisheries that harvest capelin. The Gulf of St. Lawrence fisheries have bycatch of overfished Atlantic cod, herring, and salmon. The North Atlantic pound net fishery also has bycatch of Atlantic cod and salmon. While management is considered moderately effective overall, managers cannot determine if capelin is being harvested sustainably due to the lack of population abundance data. Under Seafood Watch standards, capelin is a key forage fish (prey for larger predators) in these ecosystems, and more information is needed to ensure its important ecological role is being protected. Seafloor impacts are minimal in all fisheries that harvest capelin.",
    RelevantImage: "images/capelin.webp",
  },
  {
    id: 9,
    name: "Striped bass caught in the U.S. Atlantic with handlines and hand-operated pole-and-lines",
    Category: "Good Alternative",
    Info: "Striped bass caught in the U.S. Atlantic with handlines and hand-operated pole-and-lines is rated yellow. Striped bass has been overfished since 2013, but overfishing is not occurring, and bycatch impacts are minimal. Overall, management is considered moderately effective. Efforts to rebuild the striped bass stock have shown some success, but it’s uncertain if they are sufficient to rebuild it by 2029. Measures to safeguard the ecosystem role of striped bass are not in place, but this fishery is unlikely to have a detrimental impact on the food web. Pole-and-line fishing gears have minimal to no habitat impacts.",
    RelevantImage: "images/striped-bass.webp",
  },
  {
    id: 10,
    name: "Gilthead bream caught with indoor recirculating tanks",
    Category: "Best Choice",
    Info: "Gilthead bream farmed worldwide in indoor recirculating tanks with wastewater treatment is rated green. The Seafood Watch analysis concludes that producers using dry pellet feed will, on average, likely have a yellow rating for feed. Indoor recirculating systems tend to have low chemical use. However, most producers can release up to 10 percent of daily water flow without treatment, and that water may contain chemicals or their byproducts. Similarly, it is unlikely the water that is discharged daily has been disinfected against disease. However, there is a low risk of disease transmission to wild species when fish are farmed in indoor recirculating tanks because it is not common for disease outbreaks to occur.",
    RelevantImage: "images/giltheaded.webp",
  },
];

function selectBestOption() {
  const answer = fish[localStorage.getItem("questionNum") - 1].Category;
  if (answer === "Best Choice") {
    playerScore = Number(localStorage.getItem("playerScore")) + 1;
    localStorage.setItem("playerScore", playerScore);
  }

  questionNum = Number(localStorage.getItem("questionNum")) + 1;
  localStorage.setItem("questionNum", questionNum);

  window.location.assign("displayInfo.html");
}

function selectGoodAlternative() {
  const answer = fish[localStorage.getItem("questionNum") - 1].Category;
  if (answer === "Good Alternative") {
    playerScore = Number(localStorage.getItem("playerScore")) + 1;
    localStorage.setItem("playerScore", playerScore);
  }

  questionNum = Number(localStorage.getItem("questionNum")) + 1;
  localStorage.setItem("questionNum", questionNum);

  window.location.assign("displayInfo.html");
}

function selectCertified() {
  const answer = fish[localStorage.getItem("questionNum") - 1].Category;
  if (answer === "Certified") {
    playerScore = Number(localStorage.getItem("playerScore")) + 1;
    localStorage.setItem("playerScore", playerScore);
  }

  questionNum = Number(localStorage.getItem("questionNum")) + 1;
  localStorage.setItem("questionNum", questionNum);

  window.location.assign("displayInfo.html");
}

function selectAvoid() {
  const answer = fish[localStorage.getItem("questionNum") - 1].Category;
  if (answer === "Avoid") {
    playerScore = Number(localStorage.getItem("playerScore")) + 1;
    localStorage.setItem("playerScore", playerScore);
  }

  questionNum = Number(localStorage.getItem("questionNum")) + 1;
  localStorage.setItem("questionNum", questionNum);

  window.location.assign("displayInfo.html");
}

function revealInfo() {
  const infoSlide = document.getElementById("specificInfo");
  const tempInfo = fish[localStorage.getItem("questionNum") - 2].Info;
  infoSlide.innerHTML = tempInfo;
  revealAnswer();
}

function revealAnswer() {
  const answerSlide = document.getElementById("specificAnswer");
  const tempAnswer = fish[localStorage.getItem("questionNum") - 2].Category;
  answerSlide.innerHTML = tempAnswer;
}

function bootUpGame() {
  localStorage.setItem("playerScore", 0);
  localStorage.setItem("questionNum", 1);

  window.location.assign("quiz.html");
}

function giveName() {
  const fishName = document.getElementById("fishNameDiv");
  const tempName = fish[localStorage.getItem("questionNum") - 1].name;
  fishName.innerHTML = tempName;

  setTimeout(() => {
    questionNum = Number(localStorage.getItem("questionNum")) + 1;
    localStorage.setItem("questionNum", questionNum);

    window.location.href = "displayInfo.html";
  }, 10000);

  giveQuestionNum();
  selectRelevantImage();
}

function nextQuestion() {
  const tempCheck = localStorage.getItem("questionNum");
  if (tempCheck > 10) {
    window.location.assign("results.html");
  } else {
    window.location.assign("quiz.html");
  }
}

function displayResults() {
  const points = localStorage.getItem("playerScore");
  const resultDisplay = document.getElementById("changingResults");
  resultDisplay.innerHTML = points;

  const rewardDisplay = document.getElementById("rewardHeader");
  if (points === 10) {
    rewardDisplay.innerHTML = "Which earns you a gold trophy!!!";
  } else if (points > 7) {
    rewardDisplay.innerHTML = "Which earns you a silver trophy!!!";
  } else if (points > 5) {
    rewardDisplay.innerHTML = "Which earns you a bronze trophy!!!";
  } else {
    rewardDisplay.innerHTML =
      "Keep practicing to learn more about protecting the environment!";
  }
}

function giveQuestionNum() {
  const currentNum = localStorage.getItem("questionNum");
  const displayPlace = document.getElementById("whichQuestionNum");
  displayPlace.innerHTML = currentNum;
}

function selectRelevantImage() {
  const currentRelevantImage =
    fish[Number(localStorage.getItem("questionNum")) - 1].RelevantImage;
  document.getElementById("images").src = currentRelevantImage;
  document.getElementById("imagesTwo").src = currentRelevantImage;
}
