(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{410:function(e,t,a){"use strict";a.r(t);var s=a(48),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"additional-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#additional-configuration"}},[e._v("#")]),e._v(" Additional Configuration")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#backups"}},[e._v("Backups")]),a("ul",[a("li",[a("a",{attrs:{href:"#using-local-backups"}},[e._v("Using Local Backups")])]),a("li",[a("a",{attrs:{href:"#using-s3-backups"}},[e._v("Using S3 Backups")])])])]),a("li",[a("a",{attrs:{href:"#reverse-proxy-setup"}},[e._v("Reverse Proxy Setup")]),a("ul",[a("li",[a("a",{attrs:{href:"#nginx-specific-configuration"}},[e._v("NGINX Specific Configuration")])]),a("li",[a("a",{attrs:{href:"#cloudflare-specific-configuration"}},[e._v("Cloudflare Specific Configuration")])])])]),a("li",[a("a",{attrs:{href:"#recaptcha"}},[e._v("reCAPTCHA")]),a("ul",[a("li",[a("a",{attrs:{href:"#configuring-recaptcha"}},[e._v("Configuring reCAPTCHA")])]),a("li",[a("a",{attrs:{href:"#disabling-recaptcha"}},[e._v("Disabling reCAPTCHA")])])])]),a("li",[a("a",{attrs:{href:"#_2fa"}},[e._v("2FA")]),a("ul",[a("li",[a("a",{attrs:{href:"#disable-2fa-requirement"}},[e._v("Disable 2FA requirement")])]),a("li",[a("a",{attrs:{href:"#disable-2fa-for-a-specific-user"}},[e._v("Disable 2FA for a specific user")])])])]),a("li",[a("a",{attrs:{href:"#telemetry"}},[e._v("Telemetry")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-does-it-work"}},[e._v("How does it work?")])]),a("li",[a("a",{attrs:{href:"#what-data-is-collected"}},[e._v("What data is collected?")])]),a("li",[a("a",{attrs:{href:"#how-is-the-data-stored"}},[e._v("How is the data stored?")])]),a("li",[a("a",{attrs:{href:"#why"}},[e._v("Why?")])]),a("li",[a("a",{attrs:{href:"#enabling-telemetry"}},[e._v("Enabling Telemetry")])]),a("li",[a("a",{attrs:{href:"#disabling-telemetry"}},[e._v("Disabling Telemetry")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backups"}},[e._v("#")]),e._v(" Backups")]),e._v(" "),a("p",[e._v("Pterodactyl Panel allows users to create backups of their servers. In order to create backups, a backup storage method has to be configured.")]),e._v(" "),a("p",[e._v("When changing Pterodactyl Panel's backup storage method, users may still download or delete existing backups from the prior storage driver. In the instance of migrating from S3 to local backups, S3 credentials must remain configured after switching to the local backup storage method.")]),e._v(" "),a("h3",{attrs:{id:"using-local-backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-local-backups"}},[e._v("#")]),e._v(" Using Local Backups")]),e._v(" "),a("p",[e._v("By default, Pterodactyl Panel uses local storage via Wings for backups. That said, this method of backup storage can be explicitly set with the following configuration in the "),a("code",[e._v(".env")]),e._v(" file:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sets your panel to use local storage via Wings for backups")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("APP_BACKUP_DRIVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("wings\n")])])]),a("p",[e._v("Do note that, when using local storage via Wings, the destination for backups is set in Wings' "),a("code",[e._v("config.yml")]),e._v(" with the following setting key:")]),e._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("system")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("backup_directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /path/to/backup/storage\n")])])]),a("h3",{attrs:{id:"using-s3-backups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-s3-backups"}},[e._v("#")]),e._v(" Using S3 Backups")]),e._v(" "),a("p",[e._v("AWS S3 (or compatible storage) can be used to store remote or cloud-based backups. The following configuration options have to be set in the "),a("code",[e._v(".env")]),e._v(" file or as environment variables in order to enable it:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Sets your panel to use s3 for backups")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("APP_BACKUP_DRIVER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("s3\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Info to actually use s3")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_DEFAULT_REGION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_ACCESS_KEY_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_SECRET_ACCESS_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_BACKUPS_BUCKET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_ENDPOINT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("\n")])])]),a("p",[e._v("For some configurations, you might have to change your S3 URL from "),a("code",[e._v("bucket.domain.com")]),e._v(" to "),a("code",[e._v("domain.com/bucket")]),e._v(". To accomplish this, add "),a("code",[e._v("AWS_USE_PATH_STYLE_ENDPOINT=true")]),e._v(" to your "),a("code",[e._v(".env")]),e._v(" file.")]),e._v(" "),a("h4",{attrs:{id:"multipart-upload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multipart-upload"}},[e._v("#")]),e._v(" Multipart Upload")]),e._v(" "),a("p",[e._v("The S3 backup is using the S3 multipart upload capabilities. In rare situations, you might want to adjust the size of a single part or the lifespan of the generated pre-signed URLs. The default part size is 5GB, and the default pre-signed URL lifespan is 60 minutes.")]),e._v(" "),a("p",[e._v("You can configure the maximal part size using the "),a("code",[e._v("BACKUP_MAX_PART_SIZE")]),e._v(" environment variable. You must specify the size in bytes. To define the pre-signed URL lifespan, use the "),a("code",[e._v("BACKUP_PRESIGNED_URL_LIFESPAN")]),e._v(" variable. The expected unit is minutes.")]),e._v(" "),a("p",[e._v("The following "),a("code",[e._v(".env")]),e._v(" snippet configures 1GB parts and uses 120 minutes as the pre-signed URL lifespan:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BACKUP_MAX_PART_SIZE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1073741824")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BACKUP_PRESIGNED_URL_LIFESPAN")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("120")]),e._v("\n")])])]),a("h4",{attrs:{id:"storage-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-class"}},[e._v("#")]),e._v(" Storage Class")]),e._v(" "),a("p",[e._v("Should you need to specify a storage class, use the "),a("code",[e._v("AWS_BACKUPS_STORAGE_CLASS")]),e._v(" environment variable. Default option is "),a("code",[e._v("STANDARD")]),e._v(" (S3 Standard).")]),e._v(" "),a("p",[e._v("The following "),a("code",[e._v(".env")]),e._v(" snippet sets the class to "),a("code",[e._v("STANDARD_IA")]),e._v(" (this is an example).")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# STANDARD_IA is an example.")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AWS_BACKUPS_STORAGE_CLASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("STANDARD_IA\n")])])]),a("h2",{attrs:{id:"reverse-proxy-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reverse-proxy-setup"}},[e._v("#")]),e._v(" Reverse Proxy Setup")]),e._v(" "),a("p",[e._v("When running Pterodactyl behind a reverse proxy, such as "),a("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200170416-What-do-the-SSL-options-mean-",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cloudflare's Flexible SSL"),a("OutboundLink")],1),e._v("\nor Nginx/Apache/Caddy, etc., you will need to make a quick modification to the Panel to ensure things continue to work as expected. By default, when using these reverse proxies,\nyour Panel will not correctly handle requests. You'll most likely be unable to login or see security warnings in your browser console as it attempts to load insecure assets.\nThis is because the internal logic the Panel uses to determine how links should be generated thinks it is running over HTTP and not over HTTPS.")]),e._v(" "),a("p",[e._v("You will need to edit the "),a("code",[e._v(".env")]),e._v(" file in the Panel's root directory to contain "),a("code",[e._v("TRUSTED_PROXIES=*")]),e._v(" at minimum. We highly suggest providing a specific IP address\n(or comma-separated list of IPs) rather than allowing "),a("code",[e._v("*")]),e._v(". For example, if your proxy is running on the same machine as the server,\nthe chances are that something like "),a("code",[e._v("TRUSTED_PROXIES=127.0.0.1")]),e._v(" will work for you.")]),e._v(" "),a("h3",{attrs:{id:"nginx-specific-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-specific-configuration"}},[e._v("#")]),e._v(" NGINX Specific Configuration")]),e._v(" "),a("p",[e._v("For Pterodactyl to properly respond to an NGINX reverse proxy, the NGINX "),a("code",[e._v("location")]),e._v(" config must contain the following lines:")]),e._v(" "),a("div",{staticClass:"language-Nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_set_header")]),e._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Proto "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_redirect")]),e._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("proxy_buffering")]),e._v(" off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nproxy_request_buffering off"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"cloudflare-specific-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-specific-configuration"}},[e._v("#")]),e._v(" Cloudflare Specific Configuration")]),e._v(" "),a("p",[e._v("If you're using Cloudflare's Flexible SSL you should set "),a("code",[e._v("TRUSTED_PROXIES")]),e._v(" to contain "),a("a",{attrs:{href:"https://www.cloudflare.com/ips/",target:"_blank",rel:"noopener noreferrer"}},[e._v("their IP addresses"),a("OutboundLink")],1),e._v(".\nBelow is an example of how to set this.")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("TRUSTED_PROXIES=173.245.48.0/20,103.21.244.0/22,103.22.200.0/22,103.31.4.0/22,141.101.64.0/18,108.162.192.0/18,190.93.240.0/20,188.114.96.0/20,197.234.240.0/22,198.41.128.0/17,162.158.0.0/15,104.16.0.0/13,104.24.0.0/14,172.64.0.0/13,131.0.72.0/22\n")])])]),a("h2",{attrs:{id:"recaptcha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recaptcha"}},[e._v("#")]),e._v(" reCAPTCHA")]),e._v(" "),a("p",[e._v("The Panel uses invisible reCAPTCHA to secure the login page from brute-force attacks. If the login attempt is considered suspicious, users may be required to perform a reCAPTCHA challenge.")]),e._v(" "),a("h3",{attrs:{id:"configuring-recaptcha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-recaptcha"}},[e._v("#")]),e._v(" Configuring reCAPTCHA")]),e._v(" "),a("p",[e._v("While we provide a global Site Key and Secret Key by default, we highly recommend changing it for your own setup.")]),e._v(" "),a("p",[e._v("You can generate your own keys in the "),a("a",{attrs:{href:"https://www.google.com/recaptcha/admin",target:"_blank",rel:"noopener noreferrer"}},[e._v("reCAPTCHA Admin Console"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("The keys can then be applied using the Settings in the admin panel. The reCAPTCHA settings can be found on the "),a("strong",[e._v("Advanced")]),e._v(" tab.")]),e._v(" "),a("h3",{attrs:{id:"disabling-recaptcha"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-recaptcha"}},[e._v("#")]),e._v(" Disabling reCAPTCHA")]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("SECURITY WARNING")]),e._v(" "),a("p",[e._v("We do not recommend disabling reCAPTCHA. It is a security mechanism that makes it harder to perform brute-force attacks on user accounts.")])]),e._v(" "),a("p",[e._v("If users have trouble logging in, or your Panel isn't exposed to the internet, it can make sense to disable reCAPTCHA.")]),e._v(" "),a("p",[e._v("reCAPTCHA can easily be disabled using the admin panel. In the Settings, select the "),a("strong",[e._v("Advanced")]),e._v(" tab and set the "),a("strong",[e._v("Status")]),e._v(" of reCAPTCHA to "),a("strong",[e._v("disabled")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"editing-your-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#editing-your-database"}},[e._v("#")]),e._v(" Editing your database")]),e._v(" "),a("p",[e._v("If you cannot access your panel, you can modify the database directly using the following commands.")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("u root "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" panel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("value")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'false'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'settings::recaptcha:enabled'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h2",{attrs:{id:"_2fa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2fa"}},[e._v("#")]),e._v(" 2FA")]),e._v(" "),a("p",[e._v("If possible you should use the panel to update your 2FA settings. If you can't access your panel for what ever reason you can use the following steps.")]),e._v(" "),a("h3",{attrs:{id:"disable-2fa-requirement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa-requirement"}},[e._v("#")]),e._v(" Disable 2FA requirement")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysql "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("u root "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("p\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" panel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("settings "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("value")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("`")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'settings::pterodactyl:auth:2fa_required'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("h3",{attrs:{id:"disable-2fa-for-a-specific-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-2fa-for-a-specific-user"}},[e._v("#")]),e._v(" Disable 2FA for a specific user")]),e._v(" "),a("p",[e._v("Run the following command in your "),a("code",[e._v("/var/www/pterodactyl")]),e._v(" directory.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("php artisan p:user:disable2fa\n")])])]),a("h2",{attrs:{id:"telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#telemetry"}},[e._v("#")]),e._v(" Telemetry")]),e._v(" "),a("p",[e._v("Since 1.11, the Panel collects anonymous metrics about the Panel and all connected nodes.\nThis feature is enabled by default, but can be disabled.")]),e._v(" "),a("p",[e._v("The data collected by this feature is not sold or used for advertising purposes.  Aggregate statistics\nmay be made public or shared with third-parties for the purposes of improving the software.")]),e._v(" "),a("h3",{attrs:{id:"how-does-it-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-it-work"}},[e._v("#")]),e._v(" How does it work?")]),e._v(" "),a("p",[e._v("The Telemetry system works by first generating a random UUIDv4 identifier for the Panel installation.\nThis identifier is stored in the database so people load-balancing multiple Panel instances can still\nhave a unique identifier.  This identifier is then sent to a remote server, along the associated\ntelemetry data.  The telemetry data is collected every 24 hours, there is no ongoing collection\nor local storage of the telemetry data, we collect the data right before we send it to the remote\nserver.")]),e._v(" "),a("p",[e._v("Currently, all telemetry collection logic is handled by the "),a("a",{attrs:{href:"https://github.com/pterodactyl/panel/blob/1.0-develop/app/Services/Telemetry/TelemetryCollectionService.php#L53",target:"_blank",rel:"noopener noreferrer"}},[e._v("TelemetryCollectionService"),a("OutboundLink")],1),e._v("\non the panel.  This service is responsible for collecting all the data that is sent to the remote\nserver.")]),e._v(" "),a("h3",{attrs:{id:"what-data-is-collected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-data-is-collected"}},[e._v("#")]),e._v(" What data is collected?")]),e._v(" "),a("p",[e._v("If you wish to see the full data that is collected, please look at the TelemetryCollectionService\n(as linked above), or use the "),a("code",[e._v("php artisan p:telemetry")]),e._v(" command to view the exact data that will\nbe sent to the remote server.")]),e._v(" "),a("p",[e._v("As of 2022-12-01, the data collected consists of:")]),e._v(" "),a("ul",[a("li",[e._v("Unique identifier for the Panel")]),e._v(" "),a("li",[e._v("Version of the Panel")]),e._v(" "),a("li",[e._v("PHP version")]),e._v(" "),a("li",[e._v("Backup storage driver (S3, Local, etc.)")]),e._v(" "),a("li",[e._v("Cache driver (Redis, Memcached, etc.)")]),e._v(" "),a("li",[e._v("Database driver and version (MySQL, MariaDB, PostgreSQL, etc.)")]),e._v(" "),a("li",[e._v("Resources\n"),a("ul",[a("li",[e._v("Allocations\n"),a("ul",[a("li",[e._v("Total number")]),e._v(" "),a("li",[e._v("Total number of used allocations (assigned to a server)")])])]),e._v(" "),a("li",[e._v("Backups\n"),a("ul",[a("li",[e._v("Total number")]),e._v(" "),a("li",[e._v("Sum of the total amount of bytes stored by backups")])])]),e._v(" "),a("li",[e._v("Eggs\n"),a("ul",[a("li",[e._v("Total number")]),e._v(" "),a("li",[e._v("Map of egg UUIDs to the number of servers using that egg")])])]),e._v(" "),a("li",[e._v("Locations\n"),a("ul",[a("li",[e._v("Total number")])])]),e._v(" "),a("li",[e._v("Mounts\n"),a("ul",[a("li",[e._v("Total number")])])]),e._v(" "),a("li",[e._v("Nests\n"),a("ul",[a("li",[e._v("Total number")]),e._v(" "),a("li",[e._v("Map of nest UUIDs to the number of servers using eggs in that nest")])])]),e._v(" "),a("li",[e._v("Nodes\n"),a("ul",[a("li",[e._v("Total number")])])]),e._v(" "),a("li",[e._v("Servers\n"),a("ul",[a("li",[e._v("Total number")]),e._v(" "),a("li",[e._v("Number of servers that are suspended")])])]),e._v(" "),a("li",[e._v("Users\n"),a("ul",[a("li",[e._v("Total number")]),e._v(" "),a("li",[e._v("Number of users that are admins")])])])])]),e._v(" "),a("li",[e._v("Nodes\n"),a("ul",[a("li",[e._v("Node UUID")]),e._v(" "),a("li",[e._v("Version of Wings on the node")]),e._v(" "),a("li",[e._v("Docker\n"),a("ul",[a("li",[e._v("Version")]),e._v(" "),a("li",[e._v("Cgroups\n"),a("ul",[a("li",[e._v("Driver")]),e._v(" "),a("li",[e._v("Version")])])]),e._v(" "),a("li",[e._v("Containers\n"),a("ul",[a("li",[e._v("Total")]),e._v(" "),a("li",[e._v("Running")]),e._v(" "),a("li",[e._v("Paused")]),e._v(" "),a("li",[e._v("Stopped")])])]),e._v(" "),a("li",[e._v("Storage\n"),a("ul",[a("li",[e._v("Driver")]),e._v(" "),a("li",[e._v("Filesystem")])])]),e._v(" "),a("li",[e._v("runc\n"),a("ul",[a("li",[e._v("Version")])])])])]),e._v(" "),a("li",[e._v("System\n"),a("ul",[a("li",[e._v("Architecture ("),a("code",[e._v("amd64")]),e._v(", "),a("code",[e._v("arm64")]),e._v(", etc.)")]),e._v(" "),a("li",[e._v("CPU Threads")]),e._v(" "),a("li",[e._v("Memory Bytes")]),e._v(" "),a("li",[e._v("Kernel Version")]),e._v(" "),a("li",[e._v("Operating System (Debian, Fedora, RHEL, Ubuntu, etc.)")]),e._v(" "),a("li",[e._v("Operating System Type (bsd, linux, windows, etc.)")])])])])])]),e._v(" "),a("h3",{attrs:{id:"how-is-the-data-stored"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-is-the-data-stored"}},[e._v("#")]),e._v(" How is the data stored?")]),e._v(" "),a("p",[e._v("Currently, the data is stored with Cloudflare, exact specifics about the format and products used\nis not available at this time as our implementation is still very much an alpha.  Right now, there\nis "),a("strong",[e._v("NO")]),e._v(" way to query or view this information, both for project team members and the public.  We\nexpect this to change in the future, but for now we are not making any guarantees about the data\nbeing publicly available.")]),e._v(" "),a("h3",{attrs:{id:"why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why"}},[e._v("#")]),e._v(" Why?")]),e._v(" "),a("p",[e._v("The primary reason for collecting this data is to help us make better decisions about the future of\nthis software.  With the release of 1.11, the minimum PHP version requirement jumped from 7.4 to 8.0,\nhowever, we wanted to add a feature that required PHP 8.1 which would've made the version requirement\njump larger and potentially cause issues for some users.  By collecting this data, we can hopefully\nhave more insight to how changes like this will affect the community and make better decisions in the\nfuture.  This is especially important for information like the architecture, kernel version, and\noperating system nodes are using.  For example, we want to utilize a feature that is only present in\nsome filesystems, but we have no idea how many people are using those filesystems, so we cannot\ndetermine if it's worth the effort to implement.")]),e._v(" "),a("p",[e._v("Some of the data is not as useful for making decisions, but is still useful for us to know.\nFor example, have you ever wondered how many Panel instances there are?  How many servers are being\nran across all of those instances?  How many users are using the Panel?  How many of those users are\nadmins?  How many servers are using a specific egg?  How many servers are using a specific nest?\nAll of these questions can be answered by the data we collect, and can help us and the community\nbetter understand how the software is being used.")]),e._v(" "),a("p",[e._v("If you have any questions about the data we collect, please feel free to reach out to us on Discord.\nOur goal is to be as transparent as possible, and we want to make sure that the community understands\nwhat we are doing and why.")]),e._v(" "),a("h3",{attrs:{id:"enabling-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enabling-telemetry"}},[e._v("#")]),e._v(" Enabling Telemetry")]),e._v(" "),a("p",[e._v("Telemetry is enabled by default, if you want to enable it after disabling it, edit your "),a("code",[e._v(".env")]),e._v(" file\nand either remove the "),a("code",[e._v("PTERODACTYL_TELEMETRY_ENABLED")]),e._v(" line, or set it to "),a("code",[e._v("true")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PTERODACTYL_TELEMETRY_ENABLED=true\n")])])]),a("h3",{attrs:{id:"disabling-telemetry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-telemetry"}},[e._v("#")]),e._v(" Disabling Telemetry")]),e._v(" "),a("p",[e._v("To disable telemetry, edit your "),a("code",[e._v(".env")]),e._v(" file and set "),a("code",[e._v("PTERODACTYL_TELEMETRY_ENABLED")]),e._v(" to "),a("code",[e._v("false")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("PTERODACTYL_TELEMETRY_ENABLED=false\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);