describe('Fluxo de Negócio - Gestão de Leads O.Chat', () => {

  // Massa de dados dinâmica para garantir que o teste seja resiliente
  const novoLead = {
    nome: 'Pamella',
    origem: `WhatsApp-ID-${Math.floor(Math.random() * 1000)}`,
    email: `atendimento.${Date.now()}@ochat.com`,
    telefone: '41999887766'
  }

  beforeEach(() => {
    // Visita a baseUrl configurada no seu cypress.config.js
    cy.visit('/')

    // Login (Importante: Você precisa criar essa conta no site antes de rodar)
    cy.get('#email').type('teste_ochat_2026@gmail.com')
    cy.get('#password').type('1234567')
    cy.get('#submit').click()

    // Valida se o login foi bem sucedido
    cy.url().should('include', '/contactList')
  })

  it('Deve registrar um novo lead vindo de canal externo com sucesso', () => {
    cy.get('#add-contact').click()

    // Preenchimento dos campos do Lead
    cy.get('#firstName').type(novoLead.nome)
    cy.get('#lastName').type(novoLead.origem)
    cy.get('#email').type(novoLead.email)
    cy.get('#phone').type(novoLead.telefone)
    
    cy.get('#submit').click()

    // Asserções: O coração do trabalho de um Quality Engineer
    cy.url().should('include', '/contactList')
    cy.contains(novoLead.origem).should('be.visible')
  })

  it('Deve validar campos obrigatórios para evitar dados corrompidos', () => {
    // Teste Negativo: Essencial para mostrar senioridade na vaga
    cy.get('#add-contact').click()
    cy.get('#submit').click()

    cy.get('#error')
      .should('be.visible')
      .and('contain', 'Contact validation failed')
  })
})

