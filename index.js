var btnEL = $("#btn");
var bmiResultEl = document.getElementById("bmi-result");
var WeightInfoEL = $("#weight-info");

function CalculateBMI() {
  var heightValue = $("#height").val() / 100;
  var weightValue = $("#weight").val();
  var CalcBMI = weightValue / Math.pow(heightValue, 2);
  var finalBMI = Math.floor(CalcBMI);
  bmiResultEl.value = finalBMI;

  if (finalBMI < 18.5) {
    WeightInfoEL.html(
      "You're Under Weight so feel free to adjust this to better suit your needs or the needs of those you're motivating!"
    );
  } else if (finalBMI >= 18.5 && finalBMI <= 24.9) {
    WeightInfoEL.html(
      "Stay committed to your Normal Weight because balance and dedication are the keys to lasting wellness and vitality. Keep shining"
    );
  } else if (finalBMI >= 25 && finalBMI <= 29.9) {
    WeightInfoEL.html(
      "You're Over Weight , So Embrace your journey to a healthier you every step forward is progress. Believe in your strength and never give up!"
    );
  } else if (finalBMI >= 30) {
    WeightInfoEL.html(
      "You're Obese, So today marks as the beginning of your transformational journey. Believe in your power to make positive changes, one step at a time. You are stronger than you know, and your determination will guide you towards a healthier, happier you"
    );
  }
}

btnEL.click(CalculateBMI);
