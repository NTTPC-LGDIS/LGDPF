var search_data = {"index":{"searchIndex":["activeresourcecontroller","apiactionlog","applicationcontroller","applicationhelper","batches","exportgooglepersonfinder","peopledestroy","consenterror","constant","countrycode","datevalidator","emailblankerror","lgdpfmailer","note","peoplecontroller","personhelper","photourluploader","timevalidator","autocomplete_city()","autocomplete_street()","cancel_personal_info()","check_for_author_email()","complete()","create()","create_address()","create_pfif()","create_result_data_title()","date_parse_for_gpf()","delete()","dup_merge()","duplication()","error_messages_for()","exec_insert_note()","execute()","execute()","expiry_date()","extend_days()","get_cache()","get_const()","hash_for_selectbox()","icon_image_tag()","index()","init()","multiviews()","new()","no_duplication()","note_author_valid()","note_invalid()","note_invalid_apply()","note_valid()","note_valid_apply()","notes()","notes_create()","notes_update()","parse_br()","people()","people_create()","people_update()","personal_info()","provide()","restore()","seek()","send_add_note()","send_delete_notice()","send_new_information()","send_note_invalid()","send_note_invalid_apply()","send_note_valid()","send_note_valid_apply()","send_restore_notice()","set_attributes()","set_attributes()","sex_parse_for_gpf()","spam()","spam_cancel()","store_dir()","subscribe_email()","terms_of_service()","unsubscribe_email()","update()","url_name()","validate_each()","validate_each()","view()","readme_for_app"],"longSearchIndex":["activeresourcecontroller","apiactionlog","applicationcontroller","applicationhelper","batches","batches::exportgooglepersonfinder","batches::peopledestroy","consenterror","constant","countrycode","datevalidator","emailblankerror","lgdpfmailer","note","peoplecontroller","personhelper","photourluploader","timevalidator","applicationcontroller#autocomplete_city()","applicationcontroller#autocomplete_street()","applicationcontroller#cancel_personal_info()","note::check_for_author_email()","peoplecontroller#complete()","peoplecontroller#create()","personhelper#create_address()","batches::exportgooglepersonfinder::create_pfif()","personhelper#create_result_data_title()","batches::exportgooglepersonfinder::date_parse_for_gpf()","peoplecontroller#delete()","peoplecontroller#dup_merge()","note::duplication()","applicationhelper#error_messages_for()","note::exec_insert_note()","batches::exportgooglepersonfinder::execute()","batches::peopledestroy::execute()","applicationcontroller#expiry_date()","peoplecontroller#extend_days()","applicationcontroller#get_cache()","constant::get_const()","countrycode::hash_for_selectbox()","personhelper#icon_image_tag()","peoplecontroller#index()","applicationcontroller#init()","peoplecontroller#multiviews()","peoplecontroller#new()","note::no_duplication()","note#note_author_valid()","peoplecontroller#note_invalid()","peoplecontroller#note_invalid_apply()","peoplecontroller#note_valid()","peoplecontroller#note_valid_apply()","activeresourcecontroller#notes()","activeresourcecontroller#notes_create()","activeresourcecontroller#notes_update()","personhelper#parse_br()","activeresourcecontroller#people()","activeresourcecontroller#people_create()","activeresourcecontroller#people_update()","peoplecontroller#personal_info()","peoplecontroller#provide()","peoplecontroller#restore()","peoplecontroller#seek()","lgdpfmailer#send_add_note()","lgdpfmailer#send_delete_notice()","lgdpfmailer#send_new_information()","lgdpfmailer#send_note_invalid()","lgdpfmailer#send_note_invalid_apply()","lgdpfmailer#send_note_valid()","lgdpfmailer#send_note_valid_apply()","lgdpfmailer#send_restore_notice()","apiactionlog#set_attributes()","note#set_attributes()","batches::exportgooglepersonfinder::sex_parse_for_gpf()","peoplecontroller#spam()","peoplecontroller#spam_cancel()","photourluploader#store_dir()","peoplecontroller#subscribe_email()","applicationcontroller#terms_of_service()","peoplecontroller#unsubscribe_email()","peoplecontroller#update()","personhelper#url_name()","datevalidator#validate_each()","timevalidator#validate_each()","peoplecontroller#view()",""],"info":[["ActiveResourceController","","ActiveResourceController.html","",""],["ApiActionLog","","ApiActionLog.html","",""],["ApplicationController","","ApplicationController.html","",""],["ApplicationHelper","","ApplicationHelper.html","",""],["Batches","","Batches.html","",""],["Batches::ExportGooglePersonFinder","","Batches/ExportGooglePersonFinder.html","",""],["Batches::PeopleDestroy","","Batches/PeopleDestroy.html","","<p>避難者情報削除バッチ\n<p>バッチの実行コマンド\n<p>rails runner Batches::PeopleDestroy.execute\n"],["ConsentError","","ConsentError.html","","<p>利用規約の同意しない場合に発生するエラー\n"],["Constant","","Constant.html","",""],["CountryCode","","CountryCode.html","",""],["DateValidator","","DateValidator.html","",""],["EmailBlankError","","EmailBlankError.html","","<p>新着情報受取画面でメールアドレスの入力が空の場合に発生するエラー\n"],["LgdpfMailer","","LgdpfMailer.html","",""],["Note","","Note.html","",""],["PeopleController","","PeopleController.html","",""],["PersonHelper","","PersonHelper.html","",""],["PhotoUrlUploader","","PhotoUrlUploader.html","",""],["TimeValidator","","TimeValidator.html","",""],["autocomplete_city","ApplicationController","ApplicationController.html#method-i-autocomplete_city","()","<p>オートコンプリート市区町村取得処理\n<p>Args\n<p>term  &mdash; ユーザ入力値\n"],["autocomplete_street","ApplicationController","ApplicationController.html#method-i-autocomplete_street","()","<p>オートコンプリート町名取得処理\n<p>Args\n<p>term  &mdash; ユーザ入力値\n"],["cancel_personal_info","ApplicationController","ApplicationController.html#method-i-cancel_personal_info","()","<p>個人情報表示を無効にする submitしたときに個人情報を非表示にする\n<p>Args\n<p>Return\n"],["check_for_author_email","Note","Note.html#method-c-check_for_author_email","(person)","<p>Personとそれに紐付くNoteに重複するauthor_emailがあるか？\n<p>Args\n<p>person  &mdash; Personオブジェクト\n"],["complete","PeopleController","PeopleController.html#method-i-complete","()","<p>完了画面\n<p>Args\n<p>id  &mdash; Person.id\n"],["create","PeopleController","PeopleController.html#method-i-create","()","<p>新規情報登録\n<p>Args\n<p>person     &mdash; Person\n"],["create_address","PersonHelper","PersonHelper.html#method-i-create_address","(person)","<p>検索結果に表示する住所文字列を生成する\n<p>Args\n<p>_person  &mdash; Person\n"],["create_pfif","Batches::ExportGooglePersonFinder","Batches/ExportGooglePersonFinder.html#method-c-create_pfif","()","<p>GooglePersonFinderへアップロードするデータの作成処理\n<p>Args\n<p>Return\n"],["create_result_data_title","PersonHelper","PersonHelper.html#method-i-create_result_data_title","(person)","<p>検索結果に表示する姓名文字列を生成する\n<p>Args\n<p>person  &mdash; Person\n"],["date_parse_for_gpf","Batches::ExportGooglePersonFinder","Batches/ExportGooglePersonFinder.html#method-c-date_parse_for_gpf","(date)","<p>date型をGooglePersonFinderの形式に変換する\n<p>Args\n<p>date  &mdash; date\n"],["delete","PeopleController","PeopleController.html#method-i-delete","()","<p>避難者情報削除画面\n<p>Args\n<p>id      &mdash; Person.id\n"],["dup_merge","PeopleController","PeopleController.html#method-i-dup_merge","()","<p>重複した避難者をまとめる\n<p>Args\n<p>person     &mdash; Person\n"],["duplication","Note","Note.html#method-c-duplication","(pid)","<p>対象Personの重複確認用のNoteを抽出する\n<p>Args\n<p>pid  &mdash; Person.id\n"],["error_messages_for","ApplicationHelper","ApplicationHelper.html#method-i-error_messages_for","(*objects)","<p>エラーメッセージを表示\n<p>Args\n<p>objects  &mdash; ActiveRecordオブジェクト\n"],["exec_insert_note","Note","Note.html#method-c-exec_insert_note","(note, e)","<p>pfifをNoteレコードに格納する\n<p>Args\n<p>note  &mdash; Noteオブジェクト\n"],["execute","Batches::ExportGooglePersonFinder","Batches/ExportGooglePersonFinder.html#method-c-execute","()",""],["execute","Batches::PeopleDestroy","Batches/PeopleDestroy.html#method-c-execute","()",""],["expiry_date","ApplicationController","ApplicationController.html#method-i-expiry_date","()","<p>有効期限の確認\n<p>Args\n<p>token  &mdash; ユニークキー\n"],["extend_days","PeopleController","PeopleController.html#method-i-extend_days","()","<p>避難者情報保持期間延長画面\n<p>Args\n<p>id      &mdash; Person.id\n"],["get_cache","ApplicationController","ApplicationController.html#method-i-get_cache","(key_name)","<p>memcacheされた値を取得・加工\n<p>Args\n<p>key_name  &mdash; キャッシュされているハッシュのキー名\n"],["get_const","Constant","Constant.html#method-c-get_const","(table_name)","<p>コンスタントマスタからデータを取得する\n<p>Args\n<p>table_name  &mdash; テーブル名\n"],["hash_for_selectbox","CountryCode","CountryCode.html#method-c-hash_for_selectbox","()","<p>コンスタントマスタからデータを取得する\n<p>Args\n<p>Return\n"],["icon_image_tag","PersonHelper","PersonHelper.html#method-i-icon_image_tag","(url)","<p>アイコンのイメージを挿入する\n<p>Args\n<p>url  &mdash; URL\n"],["index","PeopleController","PeopleController.html#method-i-index","()","<p>トップ画面\n<p>Args\n<p>Return\n"],["init","ApplicationController","ApplicationController.html#method-i-init","()","<p>コンスタントマスタの読み込み\n<p>Args\n<p>Return\n"],["multiviews","PeopleController","PeopleController.html#method-i-multiviews","()","<p>避難者情報重複確認画面\n<p>Args\n<p>id1  &mdash; 検索一覧で選択されたPerson.id\n"],["new","PeopleController","PeopleController.html#method-i-new","()","<p>新規作成画面\n<p>Args\n<p>family_name  &mdash; 安否情報対象者入力画面で入力した値\n"],["no_duplication","Note","Note.html#method-c-no_duplication","(pid)","<p>対象Personの重複確認用のNote以外を抽出する\n<p>Args\n<p>pid  &mdash; Person.id\n"],["note_author_valid","Note","Note.html#method-i-note_author_valid","()","<p>statusとauthor_made_contactの相互validation\n<p>status = 3                  : 状況「私が本人である」\n<p>author_made_contact = …\n"],["note_invalid","PeopleController","PeopleController.html#method-i-note_invalid","()","<p>安否情報登録無効画面\n<p>Args\n<p>id      &mdash; Person.id\n"],["note_invalid_apply","PeopleController","PeopleController.html#method-i-note_invalid_apply","()","<p>安否情報登録無効申請画面\n<p>Args\n<p>id      &mdash; Person.id\n"],["note_valid","PeopleController","PeopleController.html#method-i-note_valid","()","<p>安否情報登録有効画面\n<p>Args\n<p>id  &mdash; Person.id\n"],["note_valid_apply","PeopleController","PeopleController.html#method-i-note_valid_apply","()","<p>安否情報登録有効申請画面\n<p>Args\n<p>id      &mdash; Person.id\n"],["notes","ActiveResourceController","ActiveResourceController.html#method-i-notes","()","<p>ActiveResource[LGDPF &lt;=&gt; LGDPM] Note取得処理\n<p>Args\n<p>person_record_id  &mdash; 避難者ID\n"],["notes_create","ActiveResourceController","ActiveResourceController.html#method-i-notes_create","()","<p>ActiveResource[LGDPF &lt;=&gt; LGDPM] Note登録処理\n<p>Args\n<p>note  &mdash; 安否情報\n"],["notes_update","ActiveResourceController","ActiveResourceController.html#method-i-notes_update","()","<p>ActiveResource[LGDPF &lt;=&gt; LGDPM] Note更新処理\n<p>Args\n<p>id  &mdash; 安否情報ID\n"],["parse_br","PersonHelper","PersonHelper.html#method-i-parse_br","(str)","<p>改行コードをHTMLの改行タグに変換する\n<p>Args\n<p>str  &mdash; 変換する文字列\n"],["people","ActiveResourceController","ActiveResourceController.html#method-i-people","()","<p>ActiveResource[LGDPF &lt;=&gt; LGDPM] People取得処理\n<p>Args\n<p>Return\n"],["people_create","ActiveResourceController","ActiveResourceController.html#method-i-people_create","()","<p>ActiveResource[LGDPF &lt;=&gt; LGDPM] Person登録処理\n<p>Args\n<p>person  &mdash; 避難者情報\n"],["people_update","ActiveResourceController","ActiveResourceController.html#method-i-people_update","()","<p>ActiveResource[LGDPF &lt;=&gt; LGDPM] People更新処理\n<p>Args\n<p>id  &mdash; 避難者ID\n"],["personal_info","PeopleController","PeopleController.html#method-i-personal_info","()","<p>個人情報表示許可画面\n<p>Args\n<p>id       &mdash; Person.id\n"],["provide","PeopleController","PeopleController.html#method-i-provide","()","<p>安否情報対象者入力画面\n<p>Args\n<p>family_name  &mdash; 画面入力された検索条件(姓)\n"],["restore","PeopleController","PeopleController.html#method-i-restore","()","<p>削除データ復元画面\n<p>Args\n<p>id      &mdash; Person.id\n"],["seek","PeopleController","PeopleController.html#method-i-seek","()","<p>検索画面\n<p>Args\n<p>name  &mdash; 画面入力された検索条件\n"],["send_add_note","LgdpfMailer","LgdpfMailer.html#method-i-send_add_note","(target)","<p>新着情報\n<p>Args\n<p>target  &mdash; 送信対象\n"],["send_delete_notice","LgdpfMailer","LgdpfMailer.html#method-i-send_delete_notice","(person)","<p>避難者のレコードが削除されたことを通知するメールを送信する\n<p>Args\n<p>person  &mdash; 削除された避難者\n"],["send_new_information","LgdpfMailer","LgdpfMailer.html#method-i-send_new_information","(person, note)","<p>新着情報を受け取るように設定したことを確認するメールを送信する\n<p>Args\n<p>person  &mdash; 新着情報をウォッチする避難者\n"],["send_note_invalid","LgdpfMailer","LgdpfMailer.html#method-i-send_note_invalid","(person)","<p>安否情報登録無効にしたことを確認するメールを送信する\n<p>Args\n<p>person  &mdash; メモ登録を無効にした避難者\n"],["send_note_invalid_apply","LgdpfMailer","LgdpfMailer.html#method-i-send_note_invalid_apply","(person)","<p>安否情報登録無効申請\n<p>Args\n<p>person  &mdash; メモ登録を無効にする避難者\n"],["send_note_valid","LgdpfMailer","LgdpfMailer.html#method-i-send_note_valid","(person)","<p>安否情報登録有効にしたことを確認するメールを送信する\n<p>Args\n<p>person  &mdash; メモ登録を有効にした避難者\n"],["send_note_valid_apply","LgdpfMailer","LgdpfMailer.html#method-i-send_note_valid_apply","(person)","<p>安否情報登録有効申請\n<p>Args\n<p>person  &mdash; メモ登録を有効にする避難者\n"],["send_restore_notice","LgdpfMailer","LgdpfMailer.html#method-i-send_restore_notice","(person)","<p>削除されたレコードが復元したことを通知するメールを送信する\n<p>Args\n<p>person  &mdash; 復元する避難者\n"],["set_attributes","ApiActionLog","ApiActionLog.html#method-i-set_attributes","()","<p>before_createで設定する項目\n"],["set_attributes","Note","Note.html#method-i-set_attributes","()","<p>before_createで設定する項目\n<p>Args\n<p>Return\n"],["sex_parse_for_gpf","Batches::ExportGooglePersonFinder","Batches/ExportGooglePersonFinder.html#method-c-sex_parse_for_gpf","(sex)","<p>性別をGooglePersonFinderの形式に変換する\n<p>Args\n<p>sex  &mdash; Person.sex\n"],["spam","PeopleController","PeopleController.html#method-i-spam","()","<p>スパム報告画面\n<p>Args\n<p>id       &mdash; Person.id\n"],["spam_cancel","PeopleController","PeopleController.html#method-i-spam_cancel","()","<p>スパム報告取消画面\n<p>Args\n<p>id       &mdash; Person.id\n"],["store_dir","PhotoUrlUploader","PhotoUrlUploader.html#method-i-store_dir","()","<p>Override the directory where uploaded files will be stored. This is a\nsensible default for uploaders …\n"],["subscribe_email","PeopleController","PeopleController.html#method-i-subscribe_email","()","<p>新着情報受信許可画面\n<p>Args\n<p>id        &mdash; Person.id\n"],["terms_of_service","ApplicationController","ApplicationController.html#method-i-terms_of_service","()","<p>利用規約画面 config/terms_message.txt に記述された内容を表示する\n<p>Args\n<p>Return\n"],["unsubscribe_email","PeopleController","PeopleController.html#method-i-unsubscribe_email","()","<p>新着情報受信拒否\n<p>Args\n<p>id       &mdash; Person.id\n"],["update","PeopleController","PeopleController.html#method-i-update","()","<p>安否情報を追加する\n<p>Args\n<p>id                  &mdash; Person.id\n"],["url_name","PersonHelper","PersonHelper.html#method-i-url_name","(url)","<p>URLの通称を返す\n<p>Args\n<p>url  &mdash; URL\n"],["validate_each","DateValidator","DateValidator.html#method-i-validate_each","(record, attribute, value)",""],["validate_each","TimeValidator","TimeValidator.html#method-i-validate_each","(record, attribute, value)",""],["view","PeopleController","PeopleController.html#method-i-view","()","<p>詳細画面\n<p>Args\n<p>id  &mdash; Person.id\n"],["README_FOR_APP","","doc/README_FOR_APP.html","","<p>Use this README file to introduce your application and point to useful\nplaces in the API for learning …\n"]]}}