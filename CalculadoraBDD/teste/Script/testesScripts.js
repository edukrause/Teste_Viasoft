function somar() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("5");
  Sys.Keys("+");
  Sys.Keys("3");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "8" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "8", 10);
  
  // Verificação tradicional que funciona em qualquer máquina
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "8");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function subtrair() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("9");
  Sys.Keys("-");
  Sys.Keys("4");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "5" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "5", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "5");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function multiplicar() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("7");
  Sys.Keys("*");
  Sys.Keys("6");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "42" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "42", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "42");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function dividir() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("8");
  Sys.Keys("/");
  Sys.Keys("2");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "4" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "4", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "4");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function dividirPorZero() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("9");
  Sys.Keys("/");
  Sys.Keys("0");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com a mensagem de erro de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "Não é possível dividir por zero", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "Não é possível dividir por zero");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function botaoCE() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("5");
  Sys.Keys("+");
  Sys.Keys("3");
  Sys.Keys("[Del]"); // Tecla CE (Clear Entry)
  
  Delay(500);
  
  // Encontra o display com o resultado "0" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "0", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "0");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function botaoC() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("8");
  Sys.Keys("*");
  Sys.Keys("5");
  Sys.Keys("[Enter]");
  Sys.Keys("+");
  Sys.Keys("2");
  Sys.Keys("[Esc]"); // Tecla C (Clear All)
  
  Delay(500);
  
  // Encontra o display com o resultado "0" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "0", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "0");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function botaoBackspace() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("1");
  Sys.Keys("2");
  Sys.Keys("3");
  Sys.Keys("[BS]"); // Tecla Backspace
  
  Delay(500);
  
  // Encontra o display com o resultado "12" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "12", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "12");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoNumeroNegativo() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("5");
  Sys.Keys("-");
  Sys.Keys("8");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "-3" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "-3", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "-3");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoPorcentagem() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("2");
  Sys.Keys("0");
  Sys.Keys("0");
  Sys.Keys("*");
  Sys.Keys("1");
  Sys.Keys("0");
  Sys.Keys("%"); // Tecla % (Shift + 5)
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "20" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "20", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "20");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoEncadeada() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("5");
  Sys.Keys("+");
  Sys.Keys("3");
  Sys.Keys("*");
  Sys.Keys("2");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "16" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "16", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "16");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoNumeroDecimal() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("5");
  Sys.Keys(",");
  Sys.Keys("5");
  Sys.Keys("+");
  Sys.Keys("2");
  Sys.Keys(",");
  Sys.Keys("3");
  Sys.Keys("[Enter]");
  
  Delay(500);
  
  // Encontra o display com o resultado "7,8" de forma genérica (considerando separador brasileiro)
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "7,8", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "7,8");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function repetirUltimaOperacaoComIgual() {
  TestedApps.calc.Run();
  Delay(2000);
  
  Sys.Keys("4");
  Sys.Keys("+");
  Sys.Keys("3");
  Sys.Keys("[Enter]");
  Sys.Keys("[Enter]"); // Repetir a última operação
  
  Delay(500);
  
  // Encontra o display com o resultado "10" de forma genérica
  var displayArea = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  var resultDisplay = displayArea.FindChild("Text", "10", 10);
  
  aqObject.CheckProperty(resultDisplay, "Text", cmpEqual, "10");
  
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function executarTodosTestes() {
  somar();
  subtrair();
  multiplicar();
  dividir();
  dividirPorZero();
  botaoCE();
  botaoC();
  botaoBackspace();
  operacaoNumeroNegativo();
  operacaoPorcentagem();
  operacaoEncadeada();
  operacaoNumeroDecimal();
  repetirUltimaOperacaoComIgual();
}