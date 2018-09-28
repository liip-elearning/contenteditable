<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Subplugin info class.
 *
 * @package   editor_contenteditable
 * @copyright 2018 Laurent Constantin https://www.liip.ch
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace editor_contenteditable\plugininfo;

use core\plugininfo\base;

defined('MOODLE_INTERNAL') || die();

class contenteditable extends base {

    /**
     * Yes you can uninstall these plugins if you want.
     *
     * @return bool
     */
    public function is_uninstall_allowed() {
        return true;
    }

    /**
     * Return URL used for management of plugins of this type.
     *
     * @return \moodle_url
     */
    public static function get_manage_url() {
        return null;
    }

    /**
     * Get the settings section name.
     * It's used to get the setting links in the contenteditable sub-plugins table.
     *
     * @return null|string the settings section name.
     */
    public function get_settings_section_name() {
        return null;
    }
}
