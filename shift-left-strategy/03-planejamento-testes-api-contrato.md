# Planejamento de Testes de API e Contrato

Este documento descreve a estratégia técnica para validar as integrações do ecossistema O.chat. No modelo **Shift-Left**, a automação de API permite identificar quebras de comunicação entre microsserviços muito antes da camada de interface (UI) ser finalizada.

---

## Objetivo Técnico
Garantir que a troca de dados entre a **IA W.**, o **Core da O.chat** e os **Canais de Mensageria** (WhatsApp/Meta) siga um contrato rigoroso, evitando erros de integração em produção.

### Fluxo de Validação: Escalonamento para Atendente
Para que o escalonamento funcione, a API de transferência deve receber um payload específico. Minha estratégia foca em validar esse contrato.

#### Definição do Contrato (Payload Esperado):
```json
{
  "ticket_id": "uuid-v4-string",
  "origem": "whatsapp",
  "contexto_ia": {
    "resumo_conversa": "string",
    "ultima_intencao": "duvida_pagamento",
    "sentimento_cliente": "frustrado"
  },
  "atendente_destino_id": "int (opcional)"
}
