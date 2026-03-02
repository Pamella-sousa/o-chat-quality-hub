# 🧪 O.Chat Web Automation - Cypress

Automação E2E focada na jornada do atendente e gestão de leads da **O.Chat**.

## 🧠 Estratégia Técnica
* **Independência de Dados**: Uso de `Date.now()` para e-mails únicos.
* **Hooks**: `beforeEach` para login centralizado e estado limpo.
* **Negative Testing**: Validação de campos obrigatórios e erros.
* **Estabilidade**: Seletores por ID (`#email`, `#submit`) para evitar quebras.

## 🛠️ Stack
* **Framework:** Cypress 13+.
* **Linguagem:** JavaScript (Node.js).

##  Como Executar
1. `cd web-automation-cypress`
2. `npm install`
3. `npx cypress open`
