const profileLocators = {
    emailInput: 'input[aria-label="Email"]',
    passwordInput: 'input[aria-label="Password"]',

    profileAvatar: 'button[class="q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--round q-btn--actionable q-focusable q-hoverable q-btn--no-uppercase header__actionButton"]',
    profileCard: '.q-card.q-card--flat.no-shadow.q-card--shadowed.userCard',
    cardName: '.userCard__name.full-width',
    cardRole: '.userCard__role.full-width.text-grey-7',
    cardBonus: 'div[class="full-width row items-center"]',
    cardBonusLink: '.text-color-primary.text-no-underline.text-primary.q-ml-sm',
    cardMenuWrapper: '.q-list.q-list--separator',

    settingsMenu: '.content__wrapper.row.no-wrap.q-px-md',
    settingsHeader: '.text-h6.text-weight-regular.row.items-center',
    settingsPoints: '.points.row.items-center.no-wrap.text-no-wrap',
    pointsClass: 'points__icon q-mr-sm',
    pointsCount: '.points__count.text-h5',

    profilePhoto: '.q-item__section.column.q-item__section--main.justify-center.avatar__wrapper.flex-justify-start.flex-row.items-center.no-wrap',
    profilePhotoClass: 'q-avatar text-white q-chip--colored avatar__image gradient flex-shrink',
    profilePhotoImage: '.q-img__image.q-img__image--with-transition.q-img__image--loaded',
    profilePhotoDefault: 'https://dev.foothunters.com/storage/images/avatars/cropped/100x100/default.jpg',
    profilePhotoPng: 'png',
    profilePhotoJpg: 'jpg',
    profilePhotoEdit: '.q-btn.q-btn-item.non-selectable.no-outline.q-btn--flat.q-btn--rectangle.q-btn--rounded.q-btn--actionable.q-focusable.q-hoverable.q-btn--no-uppercase.avatar__action',
    profilePhotoChange: '.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row',
    profileCroptopright: '.vue-bounding-box__handler',

    profileSettingsItem: '.q-expansion-item.q-item-type.q-expansion-item--collapsed.q-expansion-item--standard.ap-expansion.q-expansion-item--no-icon.q-expansion-item--expandable.settings__item',
    fullNameLabel: '.q-item__section.column.q-item__section--main.justify-center',
    fullName: '.q-item__section.column.q-item__section--main.justify-center.settings__detail',
    fullNameEdit: '.q-item__section.column.q-item__section--side.justify-center.q-item__section--nowrap.flex-row.no-wrap.q-gutter-x-sm.flex-items-center',
    firstNameInput: 'input[aria-label="First name"]',
    lastNameInput: 'input[aria-label="Last name"]',
    bannerContent: '.q-banner__content.col.text-body2',
    bannerText: 'Please Note!After your profile is approved you will not be able to change your name, surname during 60 days period.',

    usernameInput: 'input[aria-label="Username"]',
    countryError: '.q-field__messages.col',
    countryPicker: '.q-field__label.no-pointer-events.absolute.ellipsis',
    countrySelector: '.q-virtual-scroll__content',
    provinceInput: 'input[aria-label="Province"]',
    addressInput: 'input[aria-label="Address line (Optional)"]',
    zipInput: 'input[aria-label="Zip code (Optional)"]',

    educationInput: 'input[aria-label="Type of educational institution (Optional)"]',
    schoolInput: 'input[aria-label="School / University (Optional)"]',
    agentInput:'input[aria-label="Agent (Optional)"]',

    cardDeleteDialog: '.q-card.q-dialog-plugin',
    dialogHeader: '.q-card__section.q-card__section--vert.q-dialog__title',
    dialogBody: '.q-card__section.q-card__section--vert.q-dialog__message',
    allowedFormat: '.text-h6.text-negative.q-mt-sm',
    

}

export default profileLocators;