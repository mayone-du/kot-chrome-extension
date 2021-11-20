use wasm_bindgen::prelude::*;

/// 平日平均で何時間働いているかを返します。
///
/// * `work_time` - 実際に働いた時間
/// * `work_day_count` - 平日働いた日数
/// TODO: 小数点の調整
#[wasm_bindgen]
pub fn calc_work_avarage(work_time: f32, work_day_count: u32) -> f32 {
    let calced_avarage = (work_time / work_day_count as f32).round();
    calced_avarage
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_calc_work_avarage() {
        let result = calc_work_avarage(114.0, 14);
        println!("work time result: {}", result);
        assert_eq!(result, 8.0);
    }
}
