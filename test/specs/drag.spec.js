describe('Tela Drag and Drop', () => {
    it('Deve ser capaz de montar a figura', async ()  => {
        const selector1 = 'new UiSelector().text("Drag").className("android.widget.TextView")'
        const dragButton = await $(`android=${selector1}`)
        await dragButton.click()


        const elem1 = await $('~drag-c1')
        const quadrante1 = 'new UiSelector().index(0).className("android.view.ViewGroup")'
        const target1 = await $(`android=${quadrante1}`)
        await elem1.dragAndDrop(target1)
    });
});