var langs = {
en: {
 step1: "ONLY TODAY",
 step2: "Do you want to get a loan of at least €300?",
 step3: "Just answer 6 simple questions!",
 step4: "Attention:",
 step5: "Offer only valid for",
 step6: "CLICK HERE",
 }
 ,
 es: {
 step1: "SOLO HOY",
 step2: "¿Quieres obtener un préstamo de al menos 300€",
 step3: "¡Solo responde a 6 preguntas simples!",
 step4: "Atención:",
 step5: "Oferta solo válida para",
 step6: "HAGA CLIC AQUÍ",
 }
 ,
 pt: {
 step1: "SOMENTE HOJE",
 step2: "Você quer obter um empréstimo de pelo menos 300€?",
 step3: "Basta responder a 6 perguntas simples!",
 step4: "Atenção:",
 step5: "Oferta válida apenas para",
 step6: "CLIQUE AQUI",
 }
 ,
 id: {
 step1: "HANYA HARI INI",
 step2: "Apakah Anda ingin mendapatkan pinjaman minimal 300€?",
 step3: "Cukup jawab 6 pertanyaan sederhana!",
 step4: "Perhatian:",
 step5: "Penawaran hanya berlaku untuk",
 step6: "KLIK DISINI",
 }
 ,
 th: {
 step1: "เฉพาะวันนี้",
 step2: "คุณต้องการกู้เงินอย่างน้อย 300€ ไหม?",
 step3: "แค่ตอบคำถามง่าย ๆ 6 ข้อเท่านั้น!",
 step4: "ความสนใจ:",
 step5: "ข้อเสนอนี้ใช้ได้สำหรับ",
 step6: "คลิกที่นี่",
 }
 ,
 it: {
 step1: "SOLO OGGI",
 step2: "Vuoi ottenere un prestito di almeno 300€?",
 step3: "Basta rispondere a 6 semplici domande!",
 step4: "Attenzione:",
 step5: "Offerta valida solo per",
 step6: "CLICCA QUI",
 }
 ,
 de: {
 step1: "NUR HEUTE",
 step2: "Möchten Sie einen Kredit von mindestens 300€ erhalten?",
 step3: "Beantworten Sie einfach 6 einfache Fragen!",
 step4: "Achtung:",
 step5: "Angebot gilt nur für",
 step6: "HIER KLICKEN",
 }
 ,
 fr: {
 step1: "UNIQUEMENT AUJOURD'HUI",
 step2: "Voulez-vous obtenir un prêt d'au moins 300€?",
 step3: "Il suffit de répondre à 6 questions simples!",
 step4: "Attention:",
 step5: "Offre valable uniquement pour",
 step6: "CLIQUEZ ICI",
 }
 ,
 nl: {
 step1: "ALLEEN VANDAAG",
 step2: "Wilt u een lening van minimaal €300 krijgen?",
 step3: "Beantwoord gewoon 6 eenvoudige vragen!",
 step4: "Aandacht:",
 step5: "Aanbieding alleen geldig voor",
 step6: "KLIK HIER",
 }
 ,
 fil: {
 step1: "NGAYON LANG NGAYON",
 step2: "Gusto mo bang makakuha ng pautang na hindi bababa sa €300?",
 step3: "Sagutin lamang ang 6 simpleng tanong!",
 step4: "Pansin:",
 step5: "May bisa lang ang alok para sa",
 step6: "PINDUTIN DITO",
 }
 ,
 vi: {
 step1: "CHỈ NGÀY HÔM NAY",
 step2: "Bạn có muốn vay ít nhất 300€ không?",
 step3: "Chỉ cần trả lời 6 câu hỏi đơn giản thôi!",
 step4: "Chú ý:",
 step5: "Ưu đãi chỉ hợp lệ cho",
 step6: "BẤM VÀO ĐÂY",
 }
 ,
 ms: {
 step1: "HARI INI SAHAJA",
 step2: "Anda ingin mendapatkan pinjaman sekurang-kurangnya €300?",
 step3: "Hanya perlu menjawab 6 soalan mudah!",
 step4: "Perhatian:",
 step5: "Tawaran hanya sah untuk",
 step6: "TEKAN DI SINI",
 }
 ,
 ru: {
 step1: "ТОЛЬКО СЕГОДНЯ",
 step2: "Хотите получить кредит на сумму не менее €300?",
 step3: "Просто ответьте на 6 простых вопросов!",
 step4: "Внимание:",
 step5: "Предложение действительно только для",
 step6: "КЛИКНИТЕ СЮДА",
 }
 ,           
};
$(document).ready(function () {
  var langBrowser =
      navigator.language || (navigator.languages && navigator.languages[0]),
      param = langs[langBrowser];
  if (param == undefined && langBrowser && langBrowser.length > 0) {
    var parsedLang = langBrowser.slice(0, 2);
    if (langs[parsedLang]) {
      param = langs[parsedLang];
    }
  }
  if (param == undefined) {
    param = langs["en"];
    // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
    $("#step1 p").text(param.step1);
    $("#step2").text(param.step2);
    $("#step3").text(param.step3);
    $("#step4").text(param.step4);
    $("#step5").text(param.step5);
    $("#step6 p").text(param.step6);
  }
  else {
    $("#step1 p").text(param.step1);
    $("#step2").text(param.step2);
    $("#step3").text(param.step3);
    $("#step4").text(param.step4);
    $("#step5").text(param.step5);
    $("#step6 p").text(param.step6);
  }
}
                  );
