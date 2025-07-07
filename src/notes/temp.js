function doPost(e) {
    try {
        // IMPORTANT: Replace this with your actual Google Sheet ID
        var SPREADSHEET_ID = "1X4l-UA30GVH5e1f-DJAGmj_v6_zERebKzYV5pVoY3pQ";
        var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
        var data = JSON.parse(e.postData.contents);

        // 1. FIX: Use `data.lecture` which is what the JavaScript sends for the sheet title.
        var sheetName = data.lecture.substring(0, 100).replace(/[\\/\\*\\?\\[\\]:]/g, "");
        var sheet = spreadsheet.getSheetByName(sheetName);

        // If the sheet doesn't exist, create it.
        if (!sheet) {
            sheet = spreadsheet.insertSheet(sheetName);
        }

        // 2. FIX: A more reliable way to handle dynamic columns.

        // Get the headers that are currently in the sheet.
        var headerRange = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 1);
        var headers = headerRange.getValues()[0];
        if (sheet.getLastRow() === 0) {
            headers = []; // Sheet is empty
        }

        // Use an object (map) to hold the data for the new row. This is safer than an array.
        var rowData = {};
        for (var key in data) {
            if (key !== 'lecture' && key !== 'lectureId') { // Exclude metadata
                rowData[key] = data[key];
            }
        }

        // Figure out the final, complete list of headers.
        var finalHeaders = headers.slice(); // Make a copy
        Object.keys(rowData).forEach(function(key) {
            if (finalHeaders.indexOf(key) === -1) {
                finalHeaders.push(key);
            }
        });

        // If we added new headers, rewrite the header row.
        if (finalHeaders.length > headers.length) {
            sheet.getRange(1, 1, 1, finalHeaders.length).setValues([finalHeaders]);
        }

        // Build the final row array in the correct order based on the headers.
        var finalRow = finalHeaders.map(function(header) {
            return rowData[header] || ""; // Use the header name to get the correct value
        });

        sheet.appendRow(finalRow);

    } catch (error) {
        // You can log errors to a separate sheet here if needed.
        Logger.log("!!! SCRIPT ERROR: " + error.toString() + " !!!");
    }
}