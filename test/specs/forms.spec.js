describe('Tela Forms', () => {
    
    it('Deve ser capaz de preencher a tela Forms com sucesso', async () => {
        let inputText = "TESTANDO"

        //Acessando a tela Forms
        const selector = 'new UiSelector().text("Forms").className("android.widget.TextView")'
        const button = await $(`android=${selector}`)
        await button.click()
        
        //Preenchendo a tela forms
        const texto = await $('~text-input')
        await texto.setValue(inputText)

        //Validando Preenchimento
        const texto1 = await $('~text-input')
        await expect(texto1).toHaveText(inputText)
        
        //Alterando o switch para ON
        const switchButton = await $('~switch')
        await switchButton.click()
        await expect(switchButton).toHaveText('ON')

        //Selecionando uma opção no dropdown
        const dropdownBtn = await $('~Dropdown')
        await dropdownBtn.click()
        const dropdownSelect = 'new UiSelector().index(3).className("android.widget.CheckedTextView")'
        const dropdownSelectBtn = await $(`android=${dropdownSelect}`)
        await expect(dropdownSelectBtn).toHaveText('This app is awesome')
        await dropdownSelectBtn.click()
        

        //Clicando no botão submeter
        const activeBtn = await $('~button-Active')
        await activeBtn.click()
    
        //Validando submissão
        const mensagemBtn = await $('.android.widget.TextView')
        await mensagemBtn.getText('This button is active')
        const ok = 'new UiSelector().index(2).className("android.widget.Button")'
        const okBtn = await $(`android=${ok}`)
        await expect(okBtn).toHaveText('OK')
        await okBtn.click()
        
    });
});