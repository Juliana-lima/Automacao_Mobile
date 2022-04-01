describe('Tela Drag and Drop', () => {
    it('Deve acessar a tela de Drag e Drop', async ()  => {
        const selector1 = 'new UiSelector().text("Drag").className("android.widget.TextView")'
        const dragButton = await $(`android=${selector1}`)
        await dragButton.click()
    });

    it('Primeiro movimento do jogo', async () => {

        const figura1 = 'new UiSelector().index(13).className("android.widget.ImageView")'
        const elem1 = await $(`android=${figura1}`)
        const local1 = 'new UiSelector().index(3).className("android.view.ViewGroup")'
        const target1 = await $(`android=${local1}`)

        await elem1.dragAndDrop(target1, 5000)
    });
});