import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "vscode-starter" is now active!')

  let disposable = vscode.commands.registerCommand('vscode-starter.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from vscode-starter!')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
