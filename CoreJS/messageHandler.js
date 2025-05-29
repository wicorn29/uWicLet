export function handleMessage(message) {
    if (message.data.toString().startsWith("run:")) {
        try {
            eval(decodeURIComponent(message.data.toString().replace("run:", "")));
        } catch (error) {
            console.error('Error executing bookmarklet:', error.message);
            window.alert('An error occurred while executing the bookmarklet. Try double checking the code of the bookmarklet. Error: ' + error.message);
        }
    }
}
