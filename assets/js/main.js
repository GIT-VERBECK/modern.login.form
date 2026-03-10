document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm')
  const passwordInput = document.getElementById('password')
  const togglePasswordBtn = document.getElementById('togglePassword')
  const toggleIcon = togglePasswordBtn.querySelector('img')

  // Toggle Password Visibility
  togglePasswordBtn.addEventListener('click', () => {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
    passwordInput.setAttribute('type', type)
    togglePasswordBtn.classList.toggle('active')
    toggleIcon.style.opacity = type === 'text' ? '1' : '0.6'
  })

  // Focus indicators for entire input groups
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    const group = input.closest('.input-group')
    input.addEventListener('focus', () => {
      group.style.transform = 'translateX(5px)'
      group.style.transition = 'var(--transition)'
    })
    input.addEventListener('blur', () => {
      group.style.transform = 'translateX(0)'
    })
  })

  // Enhance Form Submission
  loginForm.addEventListener('submit', e => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = passwordInput.value
    const submitBtn = loginForm.querySelector('.btn-primary')

    submitBtn.style.width = submitBtn.offsetWidth + 'px' // Freeze width
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = 'Signing in...'
    submitBtn.disabled = true

    // Simulate API call
    setTimeout(() => {
      submitBtn.style.backgroundColor = '#10b981'
      submitBtn.innerHTML = 'Success!'

      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
        submitBtn.style.backgroundColor = ''
        submitBtn.style.width = '100%'
        // Vider les champs du formulaire
        document.getElementById('email').value = ''
        passwordInput.value = ''
      }, 2000)
    }, 1500)
  })

  // const btnSubmit = document.getElementById('btnSubmit')
  // const email = document.getElementById('email')
  // const password = document.getElementById('password')
  // btnSubmit.addEventListener('click', () => {
  //   email.value = ' '
  //   password.value = ' '
  // })

  // Add subtle hover effects to social buttons
  const socialButtons = document.querySelectorAll('.btn-social')
  socialButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px)'
      btn.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    })
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0)'
      btn.style.boxShadow = 'none'
    })
  })
})

// Clean input after submit
