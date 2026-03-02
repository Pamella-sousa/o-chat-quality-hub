# 🤖 O.Chat Quality & Engineering Hub

Este repositório é a central estratégica de **Quality Engineering** para as soluções de Chat-Commerce e atendimento Omnichannel. Aqui, a qualidade não é uma etapa final, mas um pilar presente desde o refinamento até a entrega segura em produção.

## 🎯 Pilares de Engenharia de Qualidade

* **Independência de Dados**: Implementação de massas dinâmicas (e-mails e IDs únicos) para garantir testes atômicos e resilientes, eliminando falsos-negativos por duplicidade.
* **Cultura de DoD (Definition of Done)**: Critérios rigorosos que garantem que nenhuma funcionalidade seja considerada "concluída" sem a devida cobertura de automação e validação de riscos.
* **Testes de Exceção (Negative Testing)**: Foco em resiliência, garantindo que o sistema barre dados corrompidos ou incompletos conforme as regras de negócio.
* **Shift-Left Testing**: Antecipação de cenários de teste ainda na fase de design e requisitos para reduzir o custo de correção de bugs.

---

## 📂 Estrutura do Ecossistema (Monorepo)

O hub está organizado para oferecer visibilidade total sobre os diferentes níveis da pirâmide de testes:

1. **`web-automation-cypress/`** 🌐
   - Automação End-to-End (E2E) da jornada do atendente e gestão de leads.
   - Uso de seletores de alta confiabilidade (IDs) e gerenciamento de estados com Hooks.

2. **`api-testing-postman/`** ⚡
   - Validação de contratos e integração de Webhooks (WhatsApp/Instagram).
   - Coleções estruturadas para testes de integração e performance de API.

3. **`docs/`** 📄
   - Documentação de processos ágeis, estratégias de QA e o arquivo oficial de **Definition of Done (DoD)**.

---

## 🛠️ Stack Tecnológica

* **Framework Web:** Cypress 13+
* **API Testing:** Postman & Newman
* **Linguagem:** JavaScript (Node.js)
* **Metodologia:** Ágil com foco em Shift-Left e Automação Contínua

---

## 🚀 Como Executar os Projetos

Cada subdiretório contém seu próprio guia técnico detalhado. Para iniciar pela automação de interface, acesse o guia específico:
👉 [README - Automação Cypress](./web-automation-cypress/README.md)

---
**Pamella – Quality Engineer | Focada em automação resiliente e processos de alta performance.**
