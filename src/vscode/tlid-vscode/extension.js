// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');




var tlid = require('tlid');
var tlidug = require('tlidug');
var idug = require('idug');

var gixdeco = require('gixdeco');

const clipboardy = require('clipboardy');




// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "Tlid" is now active!');

    // // The command has been defined in the package.json file
    // // Now provide the implementation of the command with  registerCommand
    // // The commandId parameter must match the command field in package.json
    // let disposable = vscode.commands.registerCommand('extension.sayHello', function () {
    //     // The code you place here will be executed every time your command is executed

    //     // Display a message box to the user
    //     vscode.window.showInformationMessage('Hello World!');
    // });

    let disposableTlidGet = vscode.commands.registerCommand('extension.TlidGet', function () {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage("Creating  Tlid...");
        var tlidValue = tlid.get();

        clipboardy.writeSync(tlidValue);
        // Display a message box to the user
        vscode.window.showInformationMessage(tlidValue);
    });

    let disposableTlidLineToJSON = vscode.commands.registerCommand('extension.TlidLineToJSON', function () {
        // The code you place here will be executed every time your command is executed
        //  vscode.window.showInformationMessage("Transforming  Tlid line...");

        var tlidLine = clipboardy.readSync();

        var tlidValue = tlid.get();

        var r =
            gixdeco.geto(tlidLine);

        try {
            if (r['tlid'] == null)
                r['tlid'] = tlidValue; //setting it up
        } catch (error) {

        }
        //  if (r.tlid == null || r.tlid == "-1")


        var out = JSON.stringify(r);

        clipboardy.writeSync(out);
        // Display a message box to the user
        vscode.window.showInformationMessage(out);
        //  vscode.window.showInformationMessage(tlidLine);
    });

    let disposableTlidGetJSON = vscode.commands.registerCommand('extension.TlidGetJSON', function () {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage("Creating JSON Tlid...");
        var tlidValue = tlid.json();

        clipboardy.writeSync(tlidValue);
        // Display a message box to the user
        vscode.window.showInformationMessage(tlidValue);
    });


    let disposableTlidugGet = vscode.commands.registerCommand('extension.TlidugGet', function () {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage("Creating  Tlidug...");
        var tlidugValue = tlidug.get();

        clipboardy.writeSync(tlidugValue);
        // Display a message box to the user
        vscode.window.showInformationMessage(tlidugValue);
    });


    let disposableIdugGet = vscode.commands.registerCommand('extension.IdugGet', function () {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage("Creating  Idug...");
        var idugValue = idug.get();

        clipboardy.writeSync(idugValue);
        // Display a message box to the user
        vscode.window.showInformationMessage(idugValue);
    });

    let disposableUnIdugGet = vscode.commands.registerCommand('extension.UnIdugGet', function () {
        // The code you place here will be executed every time your command is executed
        vscode.window.showInformationMessage("Creating UnDashed Idug...");
        var idugValue = idug.un();

        clipboardy.writeSync(idugValue);
        // Display a message box to the user
        vscode.window.showInformationMessage(idugValue);
    });



    context.subscriptions.push(disposableTlidLineToJSON);
    context.subscriptions.push(disposableUnIdugGet);
    context.subscriptions.push(disposableIdugGet);
    context.subscriptions.push(disposableTlidGet);
    context.subscriptions.push(disposableTlidGetJSON);
    context.subscriptions.push(disposableTlidugGet);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;


function writeFile(dropDir, targetFile, targetContent) {


    fs.writeFile(dropDir + "\\" + targetFile, targetContent, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log(' saved JSON and reformatted clipboard!');


        vscode.window.showInformationMessage("ZepPasta saved :" + targetFile);
    });
}