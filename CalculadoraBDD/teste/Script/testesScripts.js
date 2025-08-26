function somar() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Mais.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Tr_s.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(14, 41);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_8.TextContainer.NormalOutput, "Text", cmpEqual, "8");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function subtrair() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Nove.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Menos.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Quatro.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(9, 29);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_5.TextContainer.NormalOutput, "Text", cmpEqual, "5");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function multiplicar() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Sete.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Multiplicar_por.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Seis.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(25, 43);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_42.TextContainer.NormalOutput, "Text", cmpEqual, "42");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function dividir() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Oito.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Dividir_por.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Dois.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(12, 22);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_4.TextContainer.NormalOutput, "Text", cmpEqual, "4");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function dividirPorZero() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Nove.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Dividir_por.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Zero.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.N_o_poss_vel_dividir_por_zero.N_o_poss_vel_dividir_por_zero.Click(212, 22);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_N_o_poss_vel_dividir_por_zero.N_o_poss_vel_dividir_por_zero.N_o_poss_vel_dividir_por_zero, "Text", cmpEqual, "Não é possível dividir por zero");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function botaoCE() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Mais.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Tr_s.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Controles_de_exibi_o.Limpar_entrada.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(17, 33);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput, "Text", cmpEqual, "0");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function botaoC() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Oito.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Multiplicar_por.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(37, 40);
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Mais.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Dois.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Controles_de_exibi_o.Limpar.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(12, 21);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput, "Text", cmpEqual, "0");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function botaoBackspace() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Um.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Dois.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Tr_s.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Controles_de_exibi_o.Backspace.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(23, 48);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_12.TextContainer.NormalOutput, "Text", cmpEqual, "12");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoNumeroNegativo() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Menos.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Oito.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(32, 40);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_3.TextContainer.NormalOutput, "Text", cmpEqual, "-3");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoPorcentagem() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Dois.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Zero.DblClick();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Multiplicar_por.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Um.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Zero.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Controles_de_exibi_o.Por_cento.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(33, 28);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_20.TextContainer.NormalOutput, "Text", cmpEqual, "20");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoEncadeada() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Mais.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Tr_s.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Multiplicar_por.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Dois.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(30, 30);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_16.TextContainer.NormalOutput, "Text", cmpEqual, "16");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function operacaoNumeroDecimal() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Separador_decimal.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Cinco.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Mais.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Dois.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Separador_decimal.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Tr_s.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(52, 30);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_7_8.TextContainer.NormalOutput, "Text", cmpEqual, "7,8");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}

function repetirUltimaOperacaoComIgual() {
  TestedApps.calc.Run();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Quatro.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Mais.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Teclado_num_rico.Tr_s.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.Operadores_padr_o.Igual_a.Click();
  Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput.Click(33, 37);
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_10.TextContainer.NormalOutput, "Text", cmpEqual, "10");
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
