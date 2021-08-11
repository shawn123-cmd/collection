// var but = document.getElementById('mybtn');
// but.addEventListener('click', function(){ alert('Thanks For SignUp');});
// console.log(but);

const options = {
    // positon:' absolute',
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true, // default: true
    // shop: '#ff',
}
const darkmode = new Darkmode(options);
darkmode.showWidget();
