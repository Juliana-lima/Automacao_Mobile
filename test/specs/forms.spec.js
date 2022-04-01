//import PreenchendoForms from '../test/page/forms.page'; 

describe('Tela Forms', () => {
    
    let inputText = "TESTANDO 123"
    
    it('Deve ser capaz de preencher a tela Forms com sucesso', async () => {

        //Acessando a tela Forms
        const selector = 'new UiSelector().text("Forms").className("android.widget.TextView")'
        const button = await $(`android=${selector}`)
        await button.click()
        
    });

    it('Preenchendo a tela forms', async () => {
        
         const texto = await $('~text-input')
         await texto.setValue(inputText)
         
    });

    it('Validando Preenchimento', async () => {
    
        const texto1 = await $('~text-input')
        await expect(texto1).toHaveText(inputText)
        
    });

    it('Alterando o switch para ON', async () => {

        const switchButton = await $('~switch')
        await switchButton.click()
        await expect(switchButton).toHaveText('ON')

    });

    it('Selecionando uma opção no dropdown', async () => {

        const dropdownBtn = await $('~Dropdown')
        await dropdownBtn.click()
        const dropdownSelect = 'new UiSelector().index(3).className("android.widget.CheckedTextView")'
        const dropdownSelectBtn = await $(`android=${dropdownSelect}`)
        await expect(dropdownSelectBtn).toHaveText('This app is awesome')
        await dropdownSelectBtn.click()
        
    });

    it('Clicando no botão submeter', async () => {

        const activeBtn = await $('~button-Active')
        await activeBtn.click()
    
    });

    it('Validando submissão', async () => {

        const mensagemBtn = await $('.android.widget.TextView')
        await mensagemBtn.getText('This button is active')
        const ok = 'new UiSelector().index(2).className("android.widget.Button")'
        const okBtn = await $(`android=${ok}`)
        await expect(okBtn).toHaveText('OK')
        await okBtn.click()
    });

    
});