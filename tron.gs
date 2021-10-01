const COLOR_DAY = ["#00ffff"];
const COLOR_NIGHT = ["#6aa84f", "#38761d"];

const SECTION1_START = 3;
const SECTION1_END = 50;
const SECTION1_2 = 1;
const SECTION2_END = 53;
const SECTION2_3 = 3;
const SECTION3_END = 80;


function sumColored(cells, color, postfix) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const range = sheet.getRange(cells);
    const values = range.getValues().flat();
    const hex_array = range.getBackgrounds().flat();

    var total = 0;

    const regexO = /(\d+)(?![ТTЮтю0-9])/;
    const regexT = /(\d+)(?=[ТTт])/;
    const regexU = /(\d+)(?=[Юю])/;

    const regex = postfix == "" ? regexO : ((postfix == "Т" || postfix == "T") ? regexT : (postfix == "Ю" ? regexU : null));

    hex_array.forEach((h, i) => {
      if (color.includes(h)) {
        var v = "" + values[i];
        console.log(v);
        var num = v.match(regex);
        if (num) {
          total += Number(num[1]);
        }
      }
    });

    return total;
}

function dayCash() {
  return sumColored("C" + SECTION1_START + ":P" + SECTION1_END,              COLOR_DAY, "")
       + sumColored("B" + (SECTION1_END + SECTION1_2) + ":P" + SECTION2_END, COLOR_DAY, "")
       + sumColored("B" + (SECTION2_END + SECTION2_3) + ":P" + SECTION3_END, COLOR_DAY, "");
}

function dayOnline() {
  return sumColored("C" + SECTION1_START + ":P" + SECTION1_END,              COLOR_DAY, "Ю")
       + sumColored("B" + (SECTION1_END + SECTION1_2) + ":P" + SECTION2_END, COLOR_DAY, "Ю")
       + sumColored("B" + (SECTION2_END + SECTION2_3) + ":P" + SECTION3_END, COLOR_DAY, "Ю");
}

function dayTerminal() {
  return sumColored("C" + SECTION1_START + ":P" + SECTION1_END,              COLOR_DAY, "Т")
       + sumColored("B" + (SECTION1_END + SECTION1_2) + ":P" + SECTION2_END, COLOR_DAY, "Т")
       + sumColored("B" + (SECTION2_END + SECTION2_3) + ":P" + SECTION3_END, COLOR_DAY, "Т");
}

function nightCash() {
  return sumColored("C" + SECTION1_START + ":P" + SECTION1_END,              COLOR_NIGHT, "")
       + sumColored("B" + (SECTION1_END + SECTION1_2) + ":P" + SECTION2_END, COLOR_NIGHT, "")
       + sumColored("B" + (SECTION2_END + SECTION2_3) + ":P" + SECTION3_END, COLOR_NIGHT, "");
}

function nightOnline() {
  return sumColored("C" + SECTION1_START + ":P" + SECTION1_END,              COLOR_NIGHT, "Ю")
       + sumColored("B" + (SECTION1_END + SECTION1_2) + ":P" + SECTION2_END, COLOR_NIGHT, "Ю")
       + sumColored("B" + (SECTION2_END + SECTION2_3) + ":P" + SECTION3_END, COLOR_NIGHT, "Ю");
}

function nightTerminal() {
  return sumColored("C" + SECTION1_START + ":P" + SECTION1_END,              COLOR_NIGHT, "Т")
       + sumColored("B" + (SECTION1_END + SECTION1_2) + ":P" + SECTION2_END, COLOR_NIGHT, "Т")
       + sumColored("B" + (SECTION2_END + SECTION2_3) + ":P" + SECTION3_END, COLOR_NIGHT, "Т");
}
