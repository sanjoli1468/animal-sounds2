function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3ikYY81pQ/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}