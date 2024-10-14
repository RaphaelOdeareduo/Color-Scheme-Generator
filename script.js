const colorInputEl = document.querySelector(".color-input")

const selectColorMode = document.querySelector(".select-mode")

const getSchemeBtn = document.querySelector(".btn__get-color")

const colorBlocks = document.querySelector(".color-blocks")

const colorsFooter = document.querySelector(".footer")

getSchemeBtn.addEventListener("click", generateScheme)

function generateScheme() {
    const seedColor = colorInputEl.value.slice(1)
    const colorSchemeMode = selectColorMode.value
    const colorCount = 5
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${colorSchemeMode}&count=${colorCount}`)
    .then(res => res.json())
    .then(data => {
        let colorBlocksHTML = ""
        let colorsFooterHTML = ""
        const dataColors = data.colors;
        dataColors.forEach((color) => {
            const colorHexValue = color.hex.value;
            colorBlocksHTML += `
              <div class="color-block" style="background-color: ${colorHexValue}"></div>
            `
            colorsFooterHTML += `
              <p class="color-value">${colorHexValue}</p>
            `
        })
        colorBlocks.innerHTML = colorBlocksHTML
        colorsFooter.innerHTML = colorsFooterHTML
    })
}