
function getPassword() {
  const slider = document.getElementById('slider')
  const radio1 = document.getElementById('checkbox1')
  const radio2 = document.getElementById('checkbox2')
  const radio3 = document.getElementById('checkbox3')
  const radio4 = document.getElementById('checkbox4')

  let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let numbers = '0123456789'
  let specialChars = '!@#$%^&*+-/;.?,'

  let password = ''
  let val = slider.value;

  for (let i = 0; i < val; i++) {
   
    if (radio1.checked) {
      password += upperCase[Math.floor(Math.random() * upperCase.length)]
    }
    if (radio2.checked) {
      password += specialChars[Math.floor(Math.random() * specialChars.length)]
    }
    if (radio3.checked) {
      password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    }
    if (radio4.checked) {
      password += numbers[Math.floor(Math.random() * numbers.length)]
    }

  }

  password = password.substring(0, val)
  document.getElementById('pw').value = password;

  return password
}
document.getElementById('generateBtn').addEventListener('click', () => {
  getPassword()
})
document.getElementById('c').addEventListener('click',()=>{
  let copyinput= document.getElementById('pw')
  copyinput.select()
  if (document.execCommand('copy')) {
    console.log('Text copied to clipboard!');
  } else {
    console.log('Copying to clipboard is not supported in your browser.');
  }
})