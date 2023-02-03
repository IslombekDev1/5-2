// const rectWidth = 300;
// const rectHeight = 400;

// function calculatePeremetr(widht, height) {
//   return 2 * (widht + height);
// }

// const result = calculatePeremetr(rectWidth, rectHeight);
// console.log(result);

// class , constructor(), this

// const numbers = [3, 7, 5];

// //    child element
// class SumNumbers {
//   constructor(nums) {
//     //misol un: let raqamlar = nums;
//     this.raqamlar = nums; // (nums) endi "raqamlar" degan yangi nom oldi;
//     this.getSum();
//   }
//   getSum() {
//     return this.raqamlar.reduce((a, b) => a + b, 0);
//   }
// }

// //    father
// class FindMiddleArifmetics extends SumNumbers {
//   //            (numbers) keldi va endi uning yangi nomi:(nums)
//   constructor(nums) {
//     super(nums); //"super"ga joyladik va u child elementning constructoriga bordi
//     this.arrLength = nums.length;
//     this.sum = this.getSum();
//     this.calculateArifmetcs();
//   }
//   calculateArifmetcs() {
//     return this.sum / this.arrLength;
//   }
// }
// const resultt = new FindMiddleArifmetics(numbers);
// console.log(resultt.calculateArifmetcs());

//                                                    Homework

function checkPassword() {
  const customTag = document.getElementById("customTag");
  const password = document.querySelector(".password").value;
  const cnfrmPassword = document.querySelector(".cnfrm-password").value;
  const answer = document.querySelector(".answer");
  const btnEl = document.querySelector(".btn");
  console.log(password, cnfrmPassword);

  if (password.length !== 0) {
    if (password === cnfrmPassword) {
      answer.textContent = "Go";
      answer.classList = "answerStyle1";
    } else {
      answer.textContent = "Password don't match";
      answer.classList = "answerStyle2";
      btnEl.textContent = "Restart";
      btnEl.style.background = "red";
      customTag.classList = "animation"
      btnEl.addEventListener("mouseover", () => {
        if (password === "1234") {
          // Good!
        } else {
          if (btnEl.classList.contains("run")) {
            btnEl.classList.remove("run");
          } else {
            btnEl.classList.add("run");
          }
        }
      });
    }
  } else {
    alert("Password can't be empty!");
  }
}
