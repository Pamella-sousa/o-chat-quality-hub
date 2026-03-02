# 🛡️ Mapeamento de Riscos e Mitigação

Este artefato demonstra a aplicação do **Shift-Left** através da antecipação de falhas críticas em fluxos de alta complexidade. O objetivo é mapear riscos técnicos e de negócio antes da execução dos testes.

---

## 📊 Matriz de Riscos: Ecossistema O.chat

Abaixo, descrevo os cenários críticos identificados para as soluções de Chat-Commerce e como a Engenharia de Qualidade atua para mitigá-los.

| Funcionalidade | Risco Identificado (Falha) | Impacto | Ação Preventiva (Mitigação) |
| :--- | :--- | :--- | :--- |
| **Checkout via Chat** | Oscilação na API de Pagamento (ex: Pix) no momento da geração do código. | Financeiro / Abandono de Carrinho. | Criar testes de integração que validam o comportamento do bot em cenários de *Timeout* e *Fallback*. |
| **Escalonamento** | Perda de contexto ou histórico da conversa ao transferir da IA para o humano. | Experiência do Cliente (Atrito). | Validar o contrato da API de transferência para garantir que o objeto `chat_history` seja obrigatório. |
| **Integração Meta** | Mudanças inesperadas na API do WhatsApp Business que quebram fluxos de automação. | Operacional (Parada de Serviço). | Implementar testes de contrato (Contract Testing) que rodam diariamente para detectar quebras de esquema. |
| **IA W. (LLM)** | Respostas inconsistentes ou promessas de descontos não configurados. | Reputação / Prejuízo Financeiro. | Estabelecer uma suíte de Testes de Sanidade (Sanity Checks) para validar os *Prompts* da IA contra regras de negócio. |

---

## 🛠️ Estratégia de Mitigação Técnica

Para garantir que esses riscos não se tornem incidentes em produção, adoto as seguintes práticas:

### 1. Testes de Exceção (Negative Testing)
Não foco apenas no "caminho feliz". Implemento testes que forçam erros de entrada de dados, quedas de conexão e instabilidades de APIs parceiras para validar a resiliência do sistema.

### 2. Observabilidade e Logs
Trabalho junto ao time de desenvolvimento para garantir que cada ponto crítico mapeado na matriz acima gere logs rastreáveis. Isso permite que, caso um risco se concretize, o tempo de identificação (MTTD) seja o menor possível.

### 3. Validação de Segurança
Em fluxos de Checkout e Escalonamento, a prioridade é a proteção de dados. Garanto que informações sensíveis não fiquem expostas em memória ou logs durante a jornada do cliente.

---

## 📈 Resultado Esperado
Ao utilizar esta matriz, a qualidade deixa de ser reativa e passa a ser **preditiva**, permitindo que o time de engenharia foque em novas funcionalidades enquanto os riscos conhecidos estão devidamente cobertos por automação e monitoramento.
