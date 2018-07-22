
const MODEL_URL = '/models'

await faceapi.loadModels(MODEL_URL)

await faceapi.loadFaceDetectionModel(MODEL_URL)
await faceapi.loadFaceLandmarkModel(MODEL_URL)
await faceapi.loadFaceRecognitionModel(MODEL_URL)

const minConfidence = 0.8
const fullFaceDescriptions = await faceapi.allFaces(input, minConfidence)
const resized = fullFaceDescriptions.map(fd => fd.forSize(width, height))
fullFaceDescription.forEach((fd, i) => {
    faceapi.drawDetection(canvas, fd.detection, { withScore: true, drawLines: true })
})

const sortAsc = (a, b) => a - b
// √Σ(pi - qi)² - calculo da distancia euclidiana
const results = fullFaceDescriptions.map((fd) => {
    const bestMatch = refDescriptors.map(
        ({ descriptor, label }) => ({
            label,
            distance: faceapi.euclideanDistance(fd.descriptor, descriptor)
        })
    ).sort(sortAsc)[0]

    return {
        detection: fd.detection,
        label: bestMatch.label,
        distance: bestMatch.distance
    }
})

// 0.6 is a good distance threshold value to judge
// whether the descriptors match or not
const maxDistance = 0.6

results.forEach(result => {
  faceapi.drawDetection(canvas, result.detection, { withScore: false })
  
  const text = `${result.distance < maxDistance ? result.className : 'unknown'} (${result.distance})`
  const { x, y, height: boxHeight } = detection.getBox()
  faceapi.drawText(
    canvas.getContext('2d'),
    x,
    y + boxHeight,
    text
  )
})
function init() {

    const video = document.getElementById('video')

    const canvas = document.getElementById('canvas')

    const context = canvas.getContext('2d')

    const tracker = new traking.ObjectTracker('face')

    tracking.track('#video', tracker, { camera: true })

    tracker.on('track', event => {

        console.log(event)

        context.clearRect(0, 0, canvas.width, canvas.height)

        event.data.foEach(rect => {

            console.log(rect)

        })

    })

}

window.onload = init()