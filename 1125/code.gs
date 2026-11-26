function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('11월25일 저녁 신청 받기')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

// HTML 파일 내부에서 다른 HTML(CSS/JS) 파일을 불러오기 위한 헬퍼 함수
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function saveResponse(formData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    // 독립형 스크립트라면 아래 줄을 활성화하고 ID를 입력하세요.
    // const ss = SpreadsheetApp.openById('스프레드시트_ID');
    const sheet = ss.getSheets()[0];

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['이름', '음식', '하고 싶은 말']);
    }

    sheet.appendRow([
      formData.name || '',
      formData.food || '',
      formData.message || ''
    ]);

    return { status: 'success' };
  } catch (error) {
    return { status: 'error', message: error.toString() };
  }
}
