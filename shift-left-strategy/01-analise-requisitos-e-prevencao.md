# 🔍 Análise de Requisitos e Prevenção de Defeitos (Shift-Left)

Este documento detalha minha atuação estratégica durante a fase de **Refinamento Técnico** na Omnichat. O foco é aplicar o **Teste Estático** para identificar falhas de lógica antes do início do desenvolvimento, garantindo uma experiência fluida no Chat-Commerce.

---

## 🚀 Caso de Estudo: Escalonamento Inteligente (IA W. ➔ Atendente)

**Cenário:** A IA W. identifica que não possui a resposta para uma dúvida complexa e realiza a **Transferência de Contexto** para um consultor humano no painel de atendimento.

### 1. Atuação no time (PO, Dev, QA)
Como QA, utilizo o Shift-Left para desafiar as regras de negócio e mapear cenários de exceção:

* **Validação de Disponibilidade:** Questiono o comportamento do sistema caso a transferência ocorra fora do horário comercial ou se não houver atendentes logados.
    * *Ação Preventiva:* Definição de uma mensagem de espera com captura de dados (Lead) para retorno posterior.
* **Sincronização de Histórico:** Garanto que o critério de aceite incluísse o envio do resumo da conversa da IA para o atendente. Isso evita que o cliente precise repetir informações
já fornecidas.
* **Desempenho da Transição:** Estabeleci um limite de tempo para que a troca de contexto não deixe o cliente "no vácuo" por mais de 3 segundos no WhatsApp.

---

## 🛠️ Definição de Pronto (DoR e DoD) 

Para garantir entregas seguras, aplico critérios rigorosos em cada etapa:

### **DoR (Definition of Ready - Pronto para Iniciar)**
* [ ] História de Usuário com critérios de aceitação validados pelo QA.
* [ ] Fluxo de experiência (UX) revisado para evitar becos sem saída no chat.
* [ ] Mapeamento de dependências com as APIs da Meta (WhatsApp/Instagram).

### **DoD (Definition of Done - Pronto para Entrega)**
* [ ] Cobertura de testes unitários validada.
* [ ] Documentação de API atualizada e disponível para o time.
* [ ] Testes de integração simulando falhas de rede e timeouts.
* [ ] Validação de Segurança: Garantir que dados sensíveis (CPFs/Cartões) sejam tratados corretamente nos logs.

---

## 📈 Impacto Estratégico
Ao antecipar a regra para "atendentes offline" no refinamento, evitamos:
1. **Churn de Clientes:** Impedimos que usuários fiquem sem resposta em períodos de alta demanda.
2. **Redução de Retrabalho:** O time de desenvolvimento não precisou refazer a lógica de filas após o deploy, economizando horas de sprint.
