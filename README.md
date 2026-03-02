# 🤖 O.Chat Quality & Engineering Hub

Este repositório é a central estratégica de **Quality Engineering** para as soluções de Chat-Commerce e atendimento Omnichannel da O.chat. Aqui, a qualidade não é tratada como uma etapa final de conferência, mas como um pilar fundamental presente desde o refinamento de requisitos até a entrega segura em produção.

---

## 🎯 Pilares de Engenharia de Qualidade

* **Shift-Left Testing**: Antecipação de cenários de teste e análise de riscos ainda na fase de design para reduzir drasticamente o custo de correção de bugs.
* **Independência de Dados**: Implementação de massas dinâmicas (e-mails e IDs únicos) para garantir testes atômicos, resilientes e evitar falsos-negativos.
* **Cultura de DoD (Definition of Done)**: Critérios rigorosos que garantem que nenhuma funcionalidade seja considerada "concluída" sem automação e validação de riscos.
* **Testes de Exceção (Negative Testing)**: Foco em resiliência, garantindo que o sistema trate corretamente dados corrompidos ou fluxos inesperados de IA.

---

## 🧠 Estratégia Shift-Left (Prevenção)

A inteligência do processo de QA está concentrada na pasta [**`shift-left-strategy/`**](./shift-left-strategy). Nela, documento como a qualidade atua antes da primeira linha de código ser escrita:

1.  **[Análise de Requisitos e Prevenção](./shift-left-strategy/01-analise-requisitos-e-prevencao.md)**: Atuação no refinamento do **Escalonamento Inteligente (IA ➔ Humano)** para evitar "vácuos" no atendimento.
2.  **[Mapeamento de Riscos e Mitigação](./shift-left-strategy/02-mapeamento-riscos-e-mitigacao.md)**: Matriz técnica para fluxos críticos de Checkout e integrações com APIs da Meta (WhatsApp/Instagram).
3.  **[Planejamento de Testes de Contrato](./shift-left-strategy/03-planejamento-testes-api-contrato.md)**: Definição antecipada de schemas JSON para garantir a integridade entre microsserviços.

---

## 📂 Estrutura do Monorepo

O hub organiza a pirâmide de testes para oferecer visibilidade total sobre a saúde do ecossistema:

### 0. `shift-left-strategy/` 🧠
* Base da Engenharia de Qualidade com foco em análise de requisitos, matriz de riscos e contratos de API.

### 1. `web-automation-cypress/` 🌐
* Automação End-to-End (E2E) da jornada do atendente e gestão de leads.
* Utilização de seletores de alta confiabilidade e gerenciamento de estados com Hooks para evitar *flakiness*.

### 2. `api-testing-postman/` ⚡
* Validação de contratos e integração de Webhooks (WhatsApp/Instagram).
* Testes de esquema JSON para garantir que a troca de dados entre a IA e o Core seja rigorosa.

### 3. `docs/` 📄
* Documentação de processos ágeis e o arquivo oficial de **Definition of Done (DoD)**.

---

## 🛠️ Stack Tecnológica

* **Framework Web**: Cypress 13+
* **API Testing**: Postman & Newman
* **Linguagem**: JavaScript (Node.js)
* **Metodologia**: Ágil com foco em Shift-Left e Automação Contínua

---

**Pamella – Quality Engineer** | Focada em automação resiliente, prevenção de defeitos e processos de alta performance.
