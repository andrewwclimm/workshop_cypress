Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
    return cy.getCookies().then((cookies) => {
      return cy.task('downloadFile', {
        url,
        directory,
        cookies,
        fileName,
      })
    })
  })

  cy.downloadFile('https://path_to_file.pdf', 'mydownloads', 'demo.pdf')
