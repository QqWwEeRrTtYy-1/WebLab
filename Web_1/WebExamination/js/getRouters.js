const apiKey = 'db88f4f9-fbfe-420d-b8ce-74707c972379'
const apiEndpoint = 'http://exam-2023-1-api.std-900.ist.mospolytech.ru/api'

async function fetchData() {
    let thisUrl = new URL(apiEndpoint + '/routes')
    thisUrl.searchParams.append('api_key', apiKey)

    try {
        let response = await fetch(thisUrl, { method: 'GET' })
        const outPutData = await response.json()

        const mainEventList = document.getElementById('mainEventList')

        for (let i = 0; i < 10; i++) {
            const trElement = document.createElement('tr')

            trElement.setAttribute('data-aos', 'zoom-in')
            trElement.setAttribute('data-aos-once', 'true')

            const tdTravelName = document.createElement('td')
            tdTravelName.classList.add('text-start')
            tdTravelName.setAttribute('data-row', 'travelName')
            tdTravelName.textContent = `${outPutData[i]['name']}`
            trElement.appendChild(tdTravelName)

            const tdDescription = document.createElement('td')
            tdDescription.classList.add('text-justify')
            tdDescription.textContent = `${outPutData[i]['description']}`
            trElement.appendChild(tdDescription)

            const tdMainObjects = document.createElement('td')
            tdMainObjects.classList.add('text-justify')
            tdMainObjects.textContent = `${outPutData[i]['mainObject']}`
            trElement.appendChild(tdMainObjects)

            const tdButton = document.createElement('td')
            tdButton.classList.add('text-end')

            const buttonElement = document.createElement('button')
            buttonElement.setAttribute('onclick', 'scrollToGidsWithText(this)')
            buttonElement.setAttribute('data-action', 'choosePlace')
            buttonElement.setAttribute('data-route', `${outPutData[i]['id']}`)
            buttonElement.setAttribute('role', 'button')
            buttonElement.setAttribute('type', 'button')
            buttonElement.classList.add('text-center', 'text-black', 'bg-main-color', 'border-0', 'px-3', 'py-1', 'rounded-5')
            buttonElement.textContent = 'Выбрать'

            tdButton.appendChild(buttonElement)
            trElement.appendChild(tdButton)

            mainEventList.appendChild(trElement)
        }

    } catch (error) {
        console.error('Error:', error)
    }
}

fetchData()