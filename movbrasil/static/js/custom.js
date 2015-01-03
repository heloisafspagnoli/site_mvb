var Validation = function () {

    return {
        
        //Validation
        initValidation: function () {
	        $("#sky-form1").validate({                   
	            // Rules for form validation
	            rules:
	            {
	                required:
	                {
	                    required: true
	                },
			nome:
	                {
	                    required: true,
	                    nome: true
	                },
	                email:
	                {
	                    required: true,
	                    email: true
	                },
	            },
	                                
	            // Messages for form validation
	            messages:
	            {
	                required:
	                {
	                    required: 'Por favor, este campo não deve ficar vazio'
	                },
			nome:
	                {
	                    required: 'Por favor, digite seu nome'
	                },
	                email:
	                {
			    required: "Por favor, digite seu e-mail",
	                    email: 'Por favor, digite um endereço de e-mail válido'
	                },
	            },                  
	            
	            // Do not change code below
	            errorPlacement: function(error, element)
	            {
	                error.insertAfter(element);
	            }
	        });
        }

    };
}();
