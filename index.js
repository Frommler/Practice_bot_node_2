const { Telegraf } = require("telegraf");
const TOKEN = "5767772684:AAFIrs0zyy4klNzIEsu2kC40BA7nOkxIV_4";
const Bot = new Telegraf(TOKEN);

let count = 0;
let price = 0;

function countPrice(count, sum) {
  let answ = 0;
  if (count >= 2 && count < 5) {
    answ = count * sum - 500;
  } else if (count >= 5 && count < 10) {
    answ = count * sum - 750;
  } else if (count >= 10) {
    answ = count * sum;
    ++count;
  }
  return "U*ll get " + count + " tickets by " + answ + "$";
}

Bot.start((ctx) => {
  ctx.reply(
    "Клієнт замовив у туристичної фірми У" +
      "путівок за ціною К за 1 штуку." +
      "Значення К та У вводиться з" +
      "клавіатури. Якщо клієнт замовив" +
      "більше двох путівок, то він одержує" +
      "знижку у розмірі 500грн, якщо було" +
      "замовлено більше п’яти путівок –" +
      "750грн, якщо було замовлено більше" +
      "10 путівок, то клієнт отримує одну" +
      "безкоштовну путівку. Вивести на екран" +
      "кількість отриманих замовником" +
      "путівок та суму, яку повинен сплатити" +
      "клієнт."
  );
  ctx.reply("Input count and price");
});

Bot.hears(/[0-9]+/, ctx => {
  if( count == 0 ) {
    count = ctx.message.text;
  } else if ( price == 0 ){
    price = ctx.message.text;
    ctx.reply(countPrice(count, price));
  } 
})

Bot.launch();
